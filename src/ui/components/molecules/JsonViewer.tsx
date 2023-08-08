interface IJsonViewer {
  data: Object
}

export default function JsonViewer({ data }: IJsonViewer) {
  return (
    <div className="border border-gray-200 p-4 rounded h-96 overflow-auto">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
