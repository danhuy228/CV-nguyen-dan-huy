document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng chạy thanh kỹ năng (Skill Bars)
    const progressBars = document.querySelectorAll('.progress-bar');
    
    setTimeout(() => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-level');
            if (targetWidth) {
                bar.style.width = targetWidth;
            }
        });
    }, 200);

    // Ảnh đại diện mặc định nếu không có file avatar.jpg
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.onerror = function() {
            this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='170' height='170' viewBox='0 0 170 170'><rect width='100%' height='100%' fill='%232b569a'/><circle cx='85' cy='65' r='35' fill='%23ffffff'/><path d='M30,150 C30,110 60,105 85,105 C110,105 140,110 140,150 Z' fill='%23ffffff'/></svg>";
        };
    }
});