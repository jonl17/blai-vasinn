# Project Schema

## Frontend

- Built using Next.js
- Provides dynamic and user-friendly interface
- Allows users to submit documents and view their status

## Headless CMS

- Uses Prismic
- Creates content types for submitted documents
- Manages content displayed on application pages

## Document Submission

- Users can submit documents using a form on the frontend
- Form collects information about the document (title, description, file)
- Data is sent to the server-side API for storage

## Server-side API

- Built using Next.js API routes
- Provides endpoints for submitting and managing documents
- Stores submitted documents in a database or other persistence layer

## Admin Control Panel

- Site administrators can view and manage submitted documents
- Page includes a list of all submitted documents and controls for changing their status and uploading verified content

## Storage

- Uses AWS S3 to store submitted documents
- S3 API is used to upload and retrieve documents from the server-side API and frontend
- Provides scalable and secure way to manage documents
