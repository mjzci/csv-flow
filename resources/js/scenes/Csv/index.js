import React, { useState } from 'react'
import { ImportCsvWrapper, InfoBlock, TitleWrapper, ImportWrapper, ImportContent } from './styled'
import { CsvImportForm, CsvDisplay } from 'components'
import { formConfig } from './constants'
import { importCsv } from 'api'
import { useHistory } from 'react-router-dom'

const CsvImport = (props) => {

  const [formErrors, setFormErrors] = useState({})
  const [camperData, setCamperData] = useState([]);
  const { push } = useHistory()


  const passFile = (file) => {

    return file;
  }

  const onSubmit = (file) => {

    const formData = new FormData();
    formData.append('csv', file);

    const importData = async data =>  {
      const response = await importCsv(formData)

      if (response.errors) {
        setFormErrors(response.errors);
      } else {
        setCamperData(response);
        setFormErrors('');
      }

    };
    importData();
}
  
  return (
    <ImportWrapper>
      <ImportContent>
        <TitleWrapper>
          <InfoBlock>
            <h1>Upload your CSV</h1>
            <br />
            <p>Your data will be parsed and displayed below.</p>
          </InfoBlock>
        </TitleWrapper>
        <CsvImportForm
          additionalErrors={formErrors}
          passFile={passFile}
          onSubmit={onSubmit}
          config={formConfig}
        />
        <br />

        <CsvDisplay camperData={camperData} />
      </ImportContent>
    </ImportWrapper>
  )
}

export default CsvImport
