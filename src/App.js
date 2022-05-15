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
      judul: "Klip Penjepit Kabel di Dinding",
    },
    {
      link: "https://shope.ee/6f2USU4dZh",
      judul: "Penutup Kemasan Agar Tidak Tumpah",
    },
    {
      link: "https://shope.ee/VRr7TSu1I",
      judul: "Alat Pengupas Buah Apel / Pir",
    },
  ];
  return (
    <div className="flex w-[350px] justify-center items-center flex-col my-10 border shadow-lg mx-auto rounded">
      <h2 className="max-w-sm rounded p-1 m-6 text-2xl font-bold underline">
        Link <span className="font-bold text-orange-500">Teman Belanjamu</span>
      </h2>
      {links.map((link, index) => (
        <div
          key={index}
          className="container w-[90%] border border-black rounded m-1 bg-orange-300 text-black hover:bg-orange-400 hover:text-white"
        >
          <a href={link.link} target="_blank">
            <p className="text-sm block p-3">
              {index + 1}. {link.judul}
            </p>
          </a>
        </div>
      ))}
      <div className="m-6">
        <p className="text-xs text-slate-400 italic">Created by A-san</p>
      </div>
    </div>
  );
}

export default App;
