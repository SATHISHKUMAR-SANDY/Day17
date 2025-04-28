import React from 'react'

const ChangeHoc = (Wrappedcomponent) => {
  return function Enhancecomponent(props){
    console.log("component",Wrappedcomponent.name);
 return <Wrappedcomponent {...props} ></Wrappedcomponent>
}
}

export default ChangeHoc