"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnalysisResults } from "@/components/analysis-results"

export function FileUpload() {
  const [isUploaded, setIsUploaded] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    setIsUploaded(true)
  }

  const handleFileChange = () => {
    setIsUploaded(true)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Explain This Stock Report to Me</CardTitle>
        <CardDescription>
          Upload a stock market report, balance sheet, or 10-K filing and get simplified insights.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isUploaded ? (
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-10 text-center transition-colors",
              isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25",
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-background p-3 shadow-sm">
                <Upload className="h-10 w-10 text-primary" />
              </div>
              <div>
                <p className="text-lg font-medium">Drag and drop your file here</p>
                <p className="text-sm text-muted-foreground mt-1">Supports PDF, XLSX, CSV (max 10MB)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-12 bg-muted-foreground/25" />
                <span className="text-sm text-muted-foreground">OR</span>
                <div className="h-px w-12 bg-muted-foreground/25" />
              </div>
              <Button onClick={handleFileChange}>
                <FileText className="mr-2 h-4 w-4" />
                Browse files
              </Button>
            </div>
          </div>
        ) : (
          <AnalysisResults />
        )}
      </CardContent>
    </Card>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
