type UploadedFilesSidebarProps = {
  files: File[];
  selectedFile: File | null;
  onFileSelect: (file: File) => void;
};

function UploadedFilesSidebar({
  files,
  selectedFile,
  onFileSelect,
}: UploadedFilesSidebarProps) {
  return (
    <aside className="w-full shrink-0 rounded-2xl border border-slate-800 bg-black p-4 lg:w-72">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Your files
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">Uploaded files</h2>
        </div>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
          {files.length}
        </span>
      </div>

      {files.length === 0 ? (
        <p className="text-sm leading-5 text-slate-500">
          Files you select or drop will appear here.
        </p>
      ) : (
        <nav aria-label="Uploaded files">
          <ul className="space-y-1">
            {files.map((file) => {
              const isSelected =
                selectedFile?.name === file.name &&
                selectedFile.lastModified === file.lastModified;

              return (
                <li key={`${file.name}-${file.lastModified}`}>
                  <button
                    type="button"
                    onClick={() => onFileSelect(file)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span aria-hidden="true" className="text-base">📄</span>
                    <span className="min-w-0 flex-1 truncate">{file.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </aside>
  );
}

export default UploadedFilesSidebar;
