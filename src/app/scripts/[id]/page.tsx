'use client'

import EditscriptScreen from "@/ui/features/EditScript";
import { useEffect, useState } from "react";

interface IScriptInfo {
  scriptName: string
  data: Object
}

export default function ViewScript({ params }: { params: { id: string } }) {
  return <EditscriptScreen scriptInfo={{}} />
}
