import { useState } from "react"

import ErrorMessage from "../components/ErrorMessage"

const withApiError = (Component) => {
  return (props) => {
    const [apiError, setApiError] = useState(false)
    return (
      <>
        {apiError
          ? <ErrorMessage />
          : <Component setApiError={setApiError} {...props} />
        }
      </>
    )
  }
}

export default withApiError