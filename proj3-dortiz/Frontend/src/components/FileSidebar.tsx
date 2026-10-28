import bellsText from "../../../input_output/TheBells.txt?raw";
import loveText from "../../../input_output/for_the_love_of_a_man.txt?raw";
import primitiveText from "../../../input_output/into_the_primitive.txt?raw";
import contentsText from "../../../input_output/tableOfContents_TheCallOfWild.txt?raw";
import callText from "../../../input_output/the_call_of_the_wild.txt?raw";
import beastText from "../../../input_output/the_dominant_primordial_beast.txt?raw";
import lawText from "../../../input_output/the_law_of_club_and_fang.txt?raw";
import soundingText from "../../../input_output/the_sounding_of_the_call.txt?raw";
import toilText from "../../../input_output/the_toil_of_trace_and_trail.txt?raw";
import mastershipText from "../../../input_output/who_has_won_to_mastership.txt?raw";

type FileSidebarProps = {
  selectedFileName: string | null;
  onFileSelect: (fileName: string) => void;
  onSampleUse: (file: File) => void;
};

// These are the text samples currently checked into input_output/.
// Keeping the list in one place makes the sidebar easy to update when samples change.
const inputFiles = [
  { fileName: "TheBells.txt", contents: bellsText },
  { fileName: "for_the_love_of_a_man.txt", contents: loveText },
  { fileName: "into_the_primitive.txt", contents: primitiveText },
  { fileName: "tableOfContents_TheCallOfWild.txt", contents: contentsText },
  { fileName: "the_call_of_the_wild.txt", contents: callText },
  { fileName: "the_dominant_primordial_beast.txt", contents: beastText },
  { fileName: "the_law_of_club_and_fang.txt", contents: lawText },
  { fileName: "the_sounding_of_the_call.txt", contents: soundingText },
  { fileName: "the_toil_of_trace_and_trail.txt", contents: toilText },
  { fileName: "who_has_won_to_mastership.txt", contents: mastershipText },
];

function FileSidebar({
  selectedFileName,
  onFileSelect,
  onSampleUse,
}: FileSidebarProps) {
  function createSampleFile(fileName: string, contents: string) {
    return new File([contents], fileName, { type: "text/plain" });
  }

  return (
    <aside className="w-full shrink-0 rounded-2xl border border-slate-800 bg-black p-4 lg:w-72">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Input files
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">Text samples</h2>
        </div>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
          {inputFiles.length}
        </span>
      </div>

      <nav aria-label="Text files in input_output">
        <ul className="space-y-1">
          {inputFiles.map(({ fileName, contents }) => {
            const isSelected = selectedFileName === fileName;
            const sampleFile = () => createSampleFile(fileName, contents);

            return (
              <li key={fileName}>
                <button
                  type="button"
                  onClick={() => onFileSelect(fileName)}
                  onDoubleClick={() => onSampleUse(sampleFile())}
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.effectAllowed = "copy";
                    event.dataTransfer.items.add(sampleFile());
                  }}
                  aria-pressed={isSelected}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span aria-hidden="true" className="text-base">📄</span>
                  <span className="truncate">{fileName}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <p className="mt-4 border-t border-slate-800 pt-4 text-xs leading-5 text-slate-500">
        Double-click a sample to use it, or drag it onto the drop box.
      </p>
    </aside>
  );
}

export default FileSidebar;
