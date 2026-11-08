# Ngân hàng bài tập CMOS VLSI Design

Tài liệu ôn tập bằng tiếng Việt cho môn VLSI Circuits Design, bao phủ 15 chương và Phụ lục A của CMOS VLSI Design, 4th edition.

- Tra cứu 270 bài cuối chương, 148 ví dụ và 73 nhóm kiến thức.
- Lọc theo chương, mức độ và mã bài.
- Có công thức, giải mẫu, sơ đồ transistor, waveform và lộ trình luyện tập.
- Đánh dấu các mục thiếu lời giải hoặc cần kiểm tra trong Solutions Manual.

## Sử dụng

Mở website, tìm chủ đề hoặc mã bài rồi chọn mục cần học.

Chọn **Tài liệu nguồn** để gắn giáo trình và Solutions Manual từ thiết bị. Các liên kết trang sẽ mở PDF đã chọn trong thẻ mới. Trình duyệt đọc tệp tại chỗ, chỉ giữ lựa chọn trong phiên hiện tại.

Số trang PDF tham chiếu của giáo trình bằng số trang sách cộng 27. Nguồn đối chiếu là CMOS VLSI Design, 4th edition và Solutions Manual ngày 26/03/2010.

## Triển khai Vercel

Import repository này vào Vercel, chọn framework **Other**, để trống Build Command và dùng thư mục gốc làm Output Directory. Cấu hình đã nằm trong vercel.json. Nhánh production là main.

Các lần cập nhật main sẽ được Vercel triển khai tự động khi kết nối GitHub đã hoạt động.

## Sửa nội dung

Chỉnh index.html để cập nhật nội dung học tập. source-documents.js xử lý việc chọn PDF cá nhân và mở trang nguồn.

Các mốc SPICE phụ thuộc bộ model của tác giả trong Manual. Khi dùng PDK khác, chạy lại mô phỏng với cùng slew, tải và PVT trước khi so sánh số liệu.

