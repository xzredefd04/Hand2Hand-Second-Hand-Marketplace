// ส่วนจัดการปุ่มโพสต์สินค้า
document.getElementById('btn-post').addEventListener('click', function() {
    // แสดงกล่องยืนยัน
    if(confirm('คุณต้องการยืนยันการโพสต์สินค้าใช่หรือไม่?')) {
        // ถ้าตกลง ให้พาไปหน้าสำเร็จ (หน้าที่บันทึกเป็นชื่อ sucessdetail.html)
        window.location.href = 'sucessdetail.html';
    }
});

// ส่วนจัดการปุ่มรีเซ็ต (ลบข้อมูล)
document.getElementById('btn-delete').addEventListener('click', function(e) {
    e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีโหลดเอง
    
    if(confirm('คุณต้องการลบข้อมูลและรีเซ็ตหน้านี้ใช่หรือไม่?')) {
        // ล้างข้อความในจุดต่างๆ ให้เป็นค่าว่างหรือค่าเริ่มต้น
        document.getElementById('display-name').innerText = 'ไม่มีข้อมูลชื่อสินค้า';
        document.getElementById('display-price').innerText = '฿ 0.00';
        document.getElementById('display-description').innerText = 'ไม่มีข้อมูลคำอธิบายสินค้า';
    }
});
