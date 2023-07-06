import { Button } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useCallback } from 'react'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import useCheckSeo from '../../hooks/useCheckSeo'

function CaculateSeoPost({formData, editorDescriptionRef, editorContentRef}) {
  const {dataSeo,handleCheck,totalScore} = useCheckSeo({formData, editorDescriptionRef, editorContentRef})
  return (
    <div>
      <span style={{background: "#4ab147"}} className="p-2 text-white">{totalScore + '/100'}</span>
      <div className="mt-3">
      {dataSeo.map(item => {
        return (
          <div key={item.id} className="flex gap-2 items-center">
            {item.status?
              <AiFillCheckCircle color={"green"} fontSize={25}/>
              :
              <AiFillCloseCircle color={"red"} fontSize={25}/>
            }
            <span className="text-base">{item.name}</span>
          </div>
        )
      })}
      </div>
     
      <Button type="primary" onClick={() => handleCheck(false)}>
        Kiểm tra SEO
      </Button>
    </div>
  )
}

export default CaculateSeoPost