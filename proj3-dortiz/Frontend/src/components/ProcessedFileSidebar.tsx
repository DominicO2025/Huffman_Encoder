type ProcessedFile = {
  blob: Blob;
  fileName: string;
};

type ProcessedFileSidebarProps = {
  file: ProcessedFile | null;
  onDownload: () => void;
};

function formatFileSize(sizeInBytes: number) {
  if (sizeInBytes < 1024) return `${sizeInBytes} B`;

  return `${(sizeInBytes / 1024).toFixed(2)} KB`;
}

function ProcessedFileSidebar({
  file,
  onDownload,
}: ProcessedFileSidebarProps) {
  return (
    <aside className="mt-4 rounded-xl border border-slate-800 bg-black p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
        Ready to download
      </p>

      {file ? (
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="truncate font-medium text-white">{file.fileName}</p>
            <p className="mt-1 text-sm text-slate-400">
              {formatFileSize(file.blob.size)}
            </p>
          </div>

          <button
            type="button"
            onClick={onDownload}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Download
          </button>
        </div>
      ) : (
        <p className="mt-2 text-sm text-slate-500">
          Your encoded or decoded file will appear here.
        </p>
      )}
    </aside>
  );
}

export default ProcessedFileSidebar;
