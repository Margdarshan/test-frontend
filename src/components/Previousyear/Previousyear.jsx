import React from 'react'
import Header from './Header'
import Hero from './Hero'
import DownloadContainer from '../StudyMaterial/DownloadContainer'

const Previousyear = () => {

  const jeeMainsMaterial = [
    {
      id: 1,
      title: "Jan 2024 Shift",
      description: "All Papers of January 2024 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 2,
      title: "Apr 2024 Shift",
      description: "All Papers of April 2024 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 3,
      title: "Jan 2023 Shift",
      description: "All Papers of January 2023 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 4,
      title: "Apr 2023 Shift",
      description: "All Papers of April 2023 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 5,
      title: "Jan 2022 Shift",
      description: "All Papers of January 2022 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    }
  ]

  const jeeAdvanceMaterial = [
    {
      id: 1,
      title: "Jan 2024 Shift",
      description: "All Papers of January 2024 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 2,
      title: "Apr 2024 Shift",
      description: "All Papers of April 2024 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 3,
      title: "Jan 2023 Shift",
      description: "All Papers of January 2023 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 4,
      title: "Apr 2023 Shift",
      description: "All Papers of April 2023 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 5,
      title: "Jan 2022 Shift",
      description: "All Papers of January 2022 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    },
    {
      id: 6,
      title: "Apr 2022 Shift",
      description: "All Papers of April 2022 Shift",
      fileUrl: "https://drive.google.com/uc?export=download&id=1Fbbyo3hSJdVr8-iNOL5fCc8QN9ac6c8Q"
    }
  ]

  const materialData = {
    "JEE Mains": jeeMainsMaterial,
    "JEE Advance": jeeAdvanceMaterial,
  }

  
  return (
      <>
          <Header />
          <Hero/>
          <DownloadContainer contentName="Previous Year Question" materialData={materialData}/>
    </>
  )
}

export default Previousyear
