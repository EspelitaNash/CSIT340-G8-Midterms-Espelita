import Controls from "./Controls";

export default function Docs({ onRead, onBookmark, onReset }) {
  return (
    <Controls
      onRead={onRead}
      onBookmark={onBookmark}
      onReset={onReset}
    />
  );
}