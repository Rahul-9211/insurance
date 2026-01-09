import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, requirement, contactNumber , message} = body

    // Validate required fields
    if (!name || !email || !requirement || !contactNumber || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Get Google Apps Script Web App URL from environment variable
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL
    console.log('scriptUrl', scriptUrl)
    if (!scriptUrl) {
      console.error('GOOGLE_APPS_SCRIPT_URL is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Prepare data for Google Sheets
    const data = {
      name,
      email,
      requirement,
      contactNumber,
      message,
      timestamp: new Date().toISOString()
    }

    // Send data to Google Apps Script
    // Note: Google Apps Script Web Apps may return redirects, so we need to handle that
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow', // Follow redirects (Google Apps Script may redirect)
    })

    // Get response text for better error logging
    const responseText = await response.text()
    
    console.log('Google Apps Script Response:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      responsePreview: responseText.substring(0, 200),
    })
    
    // Check if response is an HTML error page (Google Apps Script returns HTML errors even with 200 status)
    const isHtmlError = responseText.trim().startsWith('<!DOCTYPE html') || 
                        responseText.includes('<title>Error</title>') ||
                        responseText.toLowerCase().includes('script.google.com') && responseText.includes('error')
    
    if (isHtmlError) {
      // Try to extract error message from HTML
      let errorMessage = 'Google Apps Script encountered an error'
      let errorDetails = ''
      
      // Try to find error message in common Google Apps Script error formats
      const errorMessageMatch = responseText.match(/<div[^>]*class="errorMessage"[^>]*>([\s\S]*?)<\/div>/i) ||
                                 responseText.match(/<div[^>]*style="[^"]*errorMessage[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
                                 responseText.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
      
      if (errorMessageMatch) {
        // Remove HTML tags and clean up whitespace
        errorDetails = errorMessageMatch[1]
          .replace(/<[^>]+>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
        
        if (errorDetails) {
          errorMessage = errorDetails.substring(0, 300)
        }
      }
      
      // Log full response for debugging
      console.error('Google Apps Script returned HTML error page:', {
        status: response.status,
        errorMessage: errorMessage,
        fullResponse: responseText,
        url: scriptUrl,
      })
      
      return NextResponse.json(
        { 
          error: 'Failed to submit to Google Sheets',
          details: errorMessage || 'The Google Apps Script returned an error. Please check your script configuration and ensure it handles POST requests correctly.',
          help: 'Common issues: 1) Script needs to be saved and redeployed, 2) Script needs proper permissions, 3) doPost function must exist and handle JSON data correctly'
        },
        { status: 500 }
      )
    }
    
    if (!response.ok) {
      console.error('Google Apps Script Error Details:', {
        status: response.status,
        statusText: response.statusText,
        fullResponse: responseText,
        url: scriptUrl,
      })
      
      // Provide specific error messages based on status code
      let errorMessage = 'Failed to submit to Google Sheets'
      let details = response.statusText
      
      if (response.status === 401) {
        errorMessage = 'Unauthorized - Script URL may be invalid or deployment not accessible'
        details = 'Please check: 1) The script is deployed as a Web App, 2) The URL ends with /exec (not /dev), 3) The deployment is active and accessible'
      } else if (response.status === 403) {
        errorMessage = 'Permission denied'
        details = 'Make sure the script is deployed with "Anyone" access (not just "Only myself")'
      } else if (response.status === 404) {
        errorMessage = 'Script not found'
        details = 'The deployment URL may be incorrect or the deployment was deleted'
      }
      
      return NextResponse.json(
        { 
          error: errorMessage, 
          details: details,
          status: response.status 
        },
        { status: 500 }
      )
    }

    // Try to parse JSON response
    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch {
      // If not JSON, check if it's a success message
      if (responseText.toLowerCase().includes('success') || response.status === 200) {
        responseData = { success: true }
      } else {
        // If it's not an error and not JSON, assume success but log the raw response
        console.log('Non-JSON response from Google Apps Script:', responseText.substring(0, 200))
        responseData = { success: true, raw: responseText.substring(0, 200) }
      }
    }

    return NextResponse.json({ success: true, data: responseData }, { status: 200 })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

