export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">เกี่ยวกับเรา</h1>

        <p className="text-lg text-gray-600 mb-6">
          เว็บไซต์นี้จัดทำขึ้นเพื่อแบ่งปันข้อมูลเกี่ยวกับรถยนต์ไฟฟ้า Tesla รุ่นใหม่ ทั้ง Model Y และ Model 3 โดยผู้ใช้งานจริงในประเทศไทย
        </p>

        <div className="bg-gray-50 border rounded-xl p-6 shadow-inner flex flex-col items-center">
          {/* รูปเจ้าของ */}
          <img
            src="/images/owner.jpg"
            alt="เจ้าของรถ"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow"
          />

          <h2 className="text-xl font-semibold text-gray-700 mb-2">เจ้าของรถ:</h2>
          <p className="text-lg text-gray-900">นายกรวิชญ์ กองเงิน</p>
          <p className="text-sm text-gray-500 mt-1">
            ผู้ใช้งาน Tesla Model Y และสนใจ Tesla Model 3
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          ข้อมูลในหน้านี้อัปเดตล่าสุดเมื่อปี 2025
        </div>
      </div>
    </div>
  );
}
