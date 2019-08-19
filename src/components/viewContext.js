import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ViewContext = React.createContext([{}, () => {}]);

const ViewProvider = (props) => {
  const [state, setState] = useState({})
  const router = useRouter()

  const syncView = targetView => setState(state => ({ ...state, view: targetView }))

  useEffect(() => {
    const pageName = router.pathname.replace(/\//g, '')
    const viewName = pageName === '' ? 'home' : pageName

    syncView(viewName)
  }, [router.pathname])

  return (
    <ViewContext.Provider value={[state, setState]}>
      {props.children}
    </ViewContext.Provider>
  );
}

export { ViewContext, ViewProvider };
