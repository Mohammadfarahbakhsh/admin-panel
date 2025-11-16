import { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { jpAxios } from "../JpAxios";

const Gallery = (props) => {
  useTitle("Gallery");
  const [albums, setAlbums] = useState([]);
  const { Confirm, Alert, Cancel, Error } = props;

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    jpAxios
      .get("/albums")
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchAlbums = (e) => {
    const photo = e.target.value.toString();
    setAlbums(albums.filter((c) => c.id.toString().includes(photo)));
  };

  const see = (itemId) => {
      setSelectedImage(`https://picsum.photos/id/${itemId}/800/600`);
  };

  const deleteGallery = async (itemId) => {
    const isConfirmed = await Confirm(`آیا از حذف آلبوم ${itemId} اطمینان دارید؟`);
    if (isConfirmed) {
      try {
        const res = await jpAxios.delete(`/albums/${itemId}`);
        if (res.status === 200) {
          const newAlbums = albums.filter((u) => u.id !== itemId);
          setAlbums(newAlbums);
          Alert("آلبوم با موفقیت حذف شد", "success");
        }
      } catch (error) {
        Error("در حذف آلبوم خطایی رخ داد", "Error");
      }
    } else {
      Cancel("عملیات حذف لغو شد", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        📸 Photo Gallery
      </h1>

      {/* search box */}
      <div className="max-w-md mx-auto mb-6">
        <input
          onChange={(id) => searchAlbums(id)}
          type="number"
          placeholder="جست‌وجوی عکس..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black outline-none"
        />
      </div>

      {/* photos */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {albums.map((u) => (
          <div key={u.id} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <img
              src={`https://picsum.photos/id/${u.id}/300/200`}
              className="w-full h-48 object-cover"
              alt={`تصویر ${u.id}`}
            />

            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-gray-800 text-sm truncate">
                عنوان عکس شماره {u.id}
              </h3>

              <div className="flex justify-between mt-2">
                <button
                  onClick={() => see(u.id)}
                  className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 text-sm"
                >
                  مشاهده
                </button>

                <button
                  onClick={() => deleteGallery(u.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 text-sm"
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;