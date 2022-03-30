import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <ReactPlayer
      url="https://youtu.be/o4tw2V2_oY8"
      controls={true}
      muted={true}
      playing={true}
      width={800}
      height={600}
    />
  );
}
