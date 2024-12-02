'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react'

interface WeatherData {
  temp: number
  humidity: number
  wind_speed: number
  cloud_pct: number
}

export function WeatherProject() {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError('Error fetching weather data. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Weather Checker</CardTitle>
        <CardDescription>Enter latitude and longitude to check current weather</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <Input
            type="text"
            placeholder="Enter latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            aria-label="Latitude"
          />
          <Input
            type="text"
            placeholder="Enter longitude"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
            aria-label="Longitude"
          />
          <Button onClick={fetchWeather} disabled={loading}>
            {loading ? 'Loading...' : 'Check Weather'}
          </Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {weather && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Thermometer className="w-5 h-5 text-red-500" />
              <span>Temperature: {weather.temp}°C</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="w-5 h-5 text-blue-500" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5 text-gray-500" />
              <span>Wind Speed: {weather.wind_speed} m/s</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5 text-gray-400" />
              <span>Cloud Cover: {weather.cloud_pct}%</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

