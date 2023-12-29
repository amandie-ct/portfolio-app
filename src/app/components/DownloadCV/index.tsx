'use client'
import * as Styled from './styles'

const DownloadCv = () => {
  const downloadPDF = () => {
    const pdfLink =
      'https://docs.google.com/document/d/1WX_La6zZkMQ5JW3utyPXgm_jZl3lAyI8BySHJdselQ8/edit?usp=sharing'

    const link = document.createElement('a')
    link.href = pdfLink
    link.target = '_blank'
    link.rel = 'noopener noreferrer'

    link.click()
  }
  return (
    <Styled.DownloadButton onClick={downloadPDF}>
      <p>Baixar currículo</p>
    </Styled.DownloadButton>
  )
}

export default DownloadCv
