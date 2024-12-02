'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Globe, Calendar, Server } from 'lucide-react'

interface WhoisData {
  domain_name: string
  registrar: string
  creation_date: string
  expiration_date: string
  name_servers: string[]
}

export function WhoisLookup() {
  const [domain, setDomain] = useState('')
  const [whoisData, setWhoisData] = useState<WhoisData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWhoisData = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/whois?domain=${encodeURIComponent(domain)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch WHOIS data')
      }
      const data = await response.json()
      setWhoisData(data)
    } catch (err) {
      setError('Error fetching WHOIS data. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>WHOIS Lookup</CardTitle>
        <CardDescription>Enter a domain name to retrieve WHOIS information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter domain name"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button onClick={fetchWhoisData} disabled={loading}>
            {loading ? 'Loading...' : 'Lookup'}
          </Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {whoisData && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>Domain: {whoisData.domain_name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Server className="w-5 h-5 text-green-500" />
              <span>Registrar: {whoisData.registrar}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-yellow-500" />
              <span>Created: {new Date(whoisData.creation_date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-red-500" />
              <span>Expires: {new Date(whoisData.expiration_date).toLocaleDateString()}</span>
            </div>
            <div>
              <h4 className="font-semibold">Name Servers:</h4>
              <ul className="list-disc list-inside">
                {whoisData.name_servers.map((ns, index) => (
                  <li key={index}>{ns}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

