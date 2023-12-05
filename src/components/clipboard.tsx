function ClipBoardSection({
  handleCopy,
  copyButton,
  submittedData,
}: {
  handleCopy: () => void
  copyButton: any
  submittedData: any
}) {
  return (
    <div>
      {submittedData && (
        <div className="mx-auto mt-3 bg-gray-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-2 ">
            <span className="text-gray-200 text-xl font-bold">
              Code Snippet
            </span>
            <button
              className=" text-white bg-teal-500 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400"
              onClick={handleCopy}
            >
              Copy
            </button>
            {copyButton && (
              <span className="text-gray-200 text-xl font-bold">Copied</span>
            )}
          </div>
          <div className="px-1 py-2 w-full">
            <pre className="language-javascript">
              <code className="text-sm text-white" id="codeSnippet">
                {JSON.stringify(submittedData, null, 5)}
              </code>
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default ClipBoardSection
