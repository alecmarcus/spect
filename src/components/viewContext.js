import React, { useEffect, useState } from 'react'
import { withRouter } from "react-router";

const ViewContext = React.createContext([{}, () => {}]);

const ViewProvider = withRouter(({ location, ...props }) => {
  const [state, setState] = useState({})

  const syncView = targetView => setState(state => ({ ...state, view: targetView }))

  useEffect(() => {
    const pageName = location.pathname.replace(/\//g, '')
    const viewName = pageName === '' ? 'home' : pageName

    syncView(viewName)
  }, [location.pathname])

  return (
    <ViewContext.Provider value={[state, setState]}>
      {props.children}
    </ViewContext.Provider>
  );
})

export { ViewContext, ViewProvider };
