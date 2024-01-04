import Layout from "./components/Layout"
import Generator from "./components/Generator"
import { SettingsProvider } from "./contexts/SettingsContext"
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <SettingsProvider>
      <Layout>
        <Generator />
        <SpeedInsights />
      </Layout>
    </SettingsProvider>
  )
}
