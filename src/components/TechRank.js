import axios from "axios"
import { useState } from "react"
import SetRank from "../containers/SetRank"

export default function TechRank({ git }) {

  // 가져온 값
  console.log("git, ", git)


  return (
    <>
      <SetRank />
    </>
  )
}
