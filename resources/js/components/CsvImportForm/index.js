import React, { useEffect, useState } from 'react'
import { FormWrapper, ButtonWrapper } from './styled'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input } from 'components'

const ImportCsvForm = (props) => {
  const { onSubmit, passFile, config, submitLabel = 'Import', additionalErrors = {}, children, defaultValues } = props
  const { reset, handleSubmit, control, formState: { errors } } = useForm()
  const [file, setUploadFile] = useState('')

  useEffect(() => {
    if (defaultValues) {
      const newValues = {}

      Object.keys(defaultValues).forEach(k => {
        const value = defaultValues[k]
        newValues[k] = value === 0 ? '0' : value || ''
      })

      reset(newValues)
    }
  }, [defaultValues, reset])

  const submitForm = (e) => {
    e.preventDefault()
    document.activeElement.blur()
    handleSubmit(onSubmit(file))
  }

  const renderFileInput = (item, idx) => {
    const { key, component, onChange, label, type, options, componentOptions, defaultValue, disabled } = item

    return (
      <Input
        key={idx}
        label={label}
        disabled={disabled}
        error={errors[key]?.message || additionalErrors[key]}
        accept={".xlsx, .xls, .csv"}
        uncontrolled
        type={type}
        onInput={(e) => setUploadFile(e.target.files[0])}
        passFile= {passFile(file)}
        // style={{display:'none'}}
      />
    )
  }

  return (
    <FormWrapper onSubmit={submitForm}>
      {config.map(renderFileInput)}
      {children}
      <ButtonWrapper>
        <Button type='submit'>{submitLabel}</Button>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default ImportCsvForm
