<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📱 Dersli Quiz - TUS Hazırlık Uygulaması</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 500px;
            width: 90%;
        }
        h1 { font-size: 2.5rem; margin-bottom: 10px; }
        .subtitle { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }
        .features {
            text-align: left;
            margin: 30px 0;
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
        }
        .feature { 
            margin: 10px 0; 
            display: flex; 
            align-items: center;
        }
        .feature::before {
            content: "✅";
            margin-right: 10px;
            font-size: 1.2rem;
        }
        .download-btn {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 15px 30px;
            font-size: 1.3rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin: 20px 0;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        }
        .download-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
        }
        .info {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .warning {
            background: rgba(255, 152, 0, 0.2);
            border: 1px solid rgba(255, 152, 0, 0.3);
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            margin: 30px 0;
        }
        .stat {
            text-align: center;
        }
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #4CAF50;
        }
        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        @media (max-width: 600px) {
            .container { padding: 20px; }
            h1 { font-size: 2rem; }
            .stats { flex-direction: column; gap: 15px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏥 Dersli Quiz</h1>
        <p class="subtitle">TUS Sınavı Hazırlık Uygulaması</p>
        
        <div class="stats">
            <div class="stat">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Soru</div>
            </div>
            <div class="stat">
                <div class="stat-number">11</div>
                <div class="stat-label">Kategori</div>
            </div>
            <div class="stat">
                <div class="stat-number">100%</div>
                <div class="stat-label">Ücretsiz</div>
            </div>
        </div>

        <div class="features">
            <div class="feature">11 farklı tıp dalından sorular</div>
            <div class="feature">Offline çalışma imkanı</div>
            <div class="feature">Koyu/Açık tema desteği</div>
            <div class="feature">Detaylı sonuç analizi</div>
            <div class="feature">Zamanlı quiz modu</div>
            <div class="feature">İlerleme takibi</div>
        </div>

        <a href="#" class="download-btn" id="downloadBtn">
            📱 APK İndir (Android)
        </a>

        <div class="info">
            <strong>📋 Sistem Gereksinimleri:</strong><br>
            • Android 5.0+ (API 21+)<br>
            • 50MB boş alan<br>
            • 2GB RAM (önerilen)
        </div>

        <div class="warning">
            <strong>⚠️ Kurulum İpucu:</strong><br>
            APK'yı indirdikten sonra "Bilinmeyen Kaynaklar" seçeneğini açmayı unutmayın!
        </div>

        <div class="info">
            <strong>📚 Kategoriler:</strong><br>
            Dahiliye, Kadın Hastalıkları, Biyokimya, Farmakoloji, Anatomi, Mikrobiyoloji, Patoloji, Genel Cerrahi, Pediatri, Küçük Stajlar, Fizyoloji & Histoloji
        </div>
    </div>

    <script>
        // APK indirme linki buraya gelecek
        document.getElementById('downloadBtn').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Buraya APK indirme linkinizi ekleyin
            const apkUrl = 'APK_INDIRME_LINKI_BURAYA';
            
            if (apkUrl === 'APK_INDIRME_LINKI_BURAYA') {
                alert('⚠️ APK linki henüz eklenmedi! Lütfen README.md dosyasını kontrol edin.');
                return;
            }
            
            // APK indirme
            window.location.href = apkUrl;
            
            // İndirme başladığında kullanıcıya bilgi ver
            setTimeout(() => {
                alert('📱 APK indirme başladı! Indirilenler klasörünü kontrol edin.');
            }, 1000);
        });

        // Sayfa yüklendiğinde animasyonlar
        window.addEventListener('load', function() {
            document.querySelector('.container').style.animation = 'slideInUp 0.6s ease-out';
        });
    </script>
</body>
</html>