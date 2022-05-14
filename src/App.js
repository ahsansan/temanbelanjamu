import "./App.css";

function App() {
  const links = [
    {
      link: "https://shope.ee/6KPdimoIhU",
      judul: "Bel Anti Air Wireless",
    },
    {
      link: "https://shope.ee/7KIBEZUzBY",
      judul: "Penutup Stop Kontak",
    },
    {
      link: "https://shope.ee/8UU8dLNzQ9",
      judul: "Penjepit Kabel di Dinding",
    },
    {
      link: "https://shope.ee/6f2USU4dZh",
      judul: "Penutup Kemasan Agar Tidak Tumpah",
    },
    {
      link: "https://shope.ee/VRr7TSu1I",
      judul: "Pengupas Buah Apel / Pir",
    },
  ];
  return (
    <div className="flex w-[350px] justify-center items-center flex-col my-10 border shadow-lg mx-auto">
      <h2 className="max-w-sm rounded p-1 m-3 text-2xl">
        Link Teman Belanjamu
      </h2>
      {links.map((link, index) => (
        <div
          key={index}
          className="container w-[90%] border border-black rounded p-3 m-1 bg-orange-300 text-black hover:bg-orange-400 hover:text-white"
        >
          <a href={link.link} target="_blank">
            <p className="text-sm">
              {index + 1}. {link.judul}
            </p>
          </a>
        </div>
      ))}
      <div className="m-3">
        <p className="text-xs italic">Created by A-san</p>
      </div>
    </div>
  );
}

export default App;
