// قائمة أسماء السور
const surahs = ['الفاتحة', 'البقرة', 'آل عمران', 'النساء', 'المائدة', 'الأنعام', 'الأعراف', 'الأنفال', 'التوبة', 'يونس', 'هود', 'يوسف', 'الرعد', 'إبراهيم', 'الحجر', 'النحل', 'الإسراء', 'الكهف', 'مريم', 'طه', 'الأنبياء', 'الحج', 'المؤمنون', 'النور', 'الفرقان', 'الشعراء', 'النمل', 'القصص', 'العنكبوت', 'الروم', 'لقمان', 'السجدة', 'الأحزاب', 'سبأ', 'فاطر', 'يس', 'الصافات', 'ص', 'الزمر', 'غافر', 'فصلت', 'الشورى', 'الزخرف', 'الدخان', 'الجاثية', 'الأحقاف', 'محمد', 'الفتح', 'الحجرات', 'ق', 'الذاريات', 'الطور', 'النجم', 'القمر', 'الرحمن', 'الواقعة', 'الحديد', 'المجادلة', 'الحشر', 'الممتحنة', 'الصف', 'الجمعة', 'المنافقون', 'التغابن', 'الطلاق', 'التحريم', 'الملك', 'القلم', 'الحاقة', 'المعارج', 'نوح', 'الجن', 'المزمل', 'المدثر', 'القيامة', 'الإنسان', 'المرسلات', 'النبأ', 'النازعات', 'عبس', 'التكوير', 'الانفطار', 'المطففين', 'الانشقاق', 'البروج', 'الطارق', 'الأعلى', 'الغاشية', 'الفجر', 'البلد', 'الشمس', 'الليل', 'الضحى', 'الشرح', 'التين', 'العلق', 'القدر', 'البينة', 'الزلزلة', 'العاديات', 'القارعة', 'التكاثر', 'العصر', 'الهمزة', 'الفيل', 'قريش', 'الماعون', 'الكوثر', 'الكافرون', 'النصر', 'المسد', 'الإخلاص', 'الفلق', 'الناس'];

// معلومات السور التفصيلية
const surahDetails = [
    { type: 'مكية', ayahCount: 7 },     // الفاتحة
    { type: 'مدنية', ayahCount: 286 },  // البقرة
    { type: 'مدنية', ayahCount: 200 },  // آل عمران
    { type: 'مدنية', ayahCount: 176 },  // النساء
    { type: 'مدنية', ayahCount: 120 },  // المائدة
    { type: 'مكية', ayahCount: 165 },   // الأنعام
    { type: 'مكية', ayahCount: 206 },   // الأعراف
    { type: 'مدنية', ayahCount: 75 },   // الأنفال
    { type: 'مدنية', ayahCount: 129 },  // التوبة
    { type: 'مكية', ayahCount: 109 },   // يونس
    { type: 'مكية', ayahCount: 123 },   // هود
    { type: 'مكية', ayahCount: 111 },   // يوسف
    { type: 'مكية', ayahCount: 43 },    // الرعد
    { type: 'مكية', ayahCount: 52 },    // إبراهيم
    { type: 'مكية', ayahCount: 99 },    // الحجر
    { type: 'مكية', ayahCount: 128 },   // النحل
    { type: 'مكية', ayahCount: 111 },   // الإسراء
    { type: 'مكية', ayahCount: 110 },   // الكهف
    { type: 'مكية', ayahCount: 98 },    // مريم
    { type: 'مكية', ayahCount: 135 },   // طه
    { type: 'مكية', ayahCount: 112 },   // الأنبياء
    { type: 'مكية', ayahCount: 78 },    // الحج
    { type: 'مكية', ayahCount: 118 },   // المؤمنون
    { type: 'مكية', ayahCount: 64 },    // النور
    { type: 'مكية', ayahCount: 77 },    // الفرقان
    { type: 'مكية', ayahCount: 227 },   // الشعراء
    { type: 'مكية', ayahCount: 93 },    // النمل
    { type: 'مكية', ayahCount: 88 },    // القصص
    { type: 'مكية', ayahCount: 69 },    // العنكبوت
    { type: 'مكية', ayahCount: 60 },    // الروم
    { type: 'مكية', ayahCount: 34 },    // لقمان
    { type: 'مكية', ayahCount: 30 },    // السجدة
    { type: 'مكية', ayahCount: 73 },    // الأحزاب
    { type: 'مكية', ayahCount: 54 },    // سبأ
    { type: 'مكية', ayahCount: 45 },    // فاطر
    { type: 'مكية', ayahCount: 83 },    // يس
    { type: 'مكية', ayahCount: 88 },    // الصافات
    { type: 'مكية', ayahCount: 29 },    // ص
    { type: 'مكية', ayahCount: 75 },    // الزمر
    { type: 'مكية', ayahCount: 85 },    // غافر
    { type: 'مكية', ayahCount: 54 },    // فصلت
    { type: 'مكية', ayahCount: 53 },    // الشورى
    { type: 'مكية', ayahCount: 89 },    // الزخرف
    { type: 'مكية', ayahCount: 59 },    // الدخان
    { type: 'مكية', ayahCount: 37 },    // الجاثية
    { type: 'مكية', ayahCount: 35 },    // الأحقاف
    { type: 'مدنية', ayahCount: 38 },   // محمد
    { type: 'مدنية', ayahCount: 29 },   // الفتح
    { type: 'مدنية', ayahCount: 18 },   // الحجرات
    { type: 'مكية', ayahCount: 45 },    // ق
    { type: 'مكية', ayahCount: 37 },    // الذاريات
    { type: 'مكية', ayahCount: 49 },    // الطور
    { type: 'مكية', ayahCount: 62 },    // النجم
    { type: 'مكية', ayahCount: 55 },    // القمر
    { type: 'مكية', ayahCount: 78 },    // الرحمن
    { type: 'مكية', ayahCount: 96 },    // الواقعة
    { type: 'مكية', ayahCount: 29 },    // الحديد
    { type: 'مدنية', ayahCount: 22 },   // المجادلة
    { type: 'مدنية', ayahCount: 24 },   // الحشر
    { type: 'مدنية', ayahCount: 13 },   // الممتحنة
    { type: 'مكية', ayahCount: 14 },    // الصف
    { type: 'مكية', ayahCount: 11 },    // الجمعة
    { type: 'مكية', ayahCount: 18 },    // المنافقون
    { type: 'مكية', ayahCount: 16 },    // التغابن
    { type: 'مكية', ayahCount: 12 },    // الطلاق
    { type: 'مكية', ayahCount: 12 },    // التحريم
    { type: 'مكية', ayahCount: 30 },    // الملك
    { type: 'مكية', ayahCount: 52 },    // القلم
    { type: 'مكية', ayahCount: 52 },    // الحاقة
    { type: 'مكية', ayahCount: 44 },    // المعارج
    { type: 'مكية', ayahCount: 28 },    // نوح
    { type: 'مكية', ayahCount: 28 },    // الجن
    { type: 'مكية', ayahCount: 20 },    // المزمل
    { type: 'مكية', ayahCount: 56 },    // المدثر
    { type: 'مكية', ayahCount: 40 },    // القيامة
    { type: 'مكية', ayahCount: 31 },    // الإنسان
    { type: 'مكية', ayahCount: 50 },    // المرسلات
    { type: 'مكية', ayahCount: 40 },    // النبأ
    { type: 'مكية', ayahCount: 46 },    // النازعات
    { type: 'مكية', ayahCount: 42 },    // عبس
    { type: 'مكية', ayahCount: 29 },    // التكوير
    { type: 'مكية', ayahCount: 19 },    // الانفطار
    { type: 'مكية', ayahCount: 36 },    // المطففين
    { type: 'مكية', ayahCount: 25 },    // الانشقاق
    { type: 'مكية', ayahCount: 22 },    // البروج
    { type: 'مكية', ayahCount: 17 },    // الطارق
    { type: 'مكية', ayahCount: 19 },    // الأعلى
    { type: 'مكية', ayahCount: 26 },    // الغاشية
    { type: 'مكية', ayahCount: 30 },    // الفجر
    { type: 'مكية', ayahCount: 20 },    // البلد
    { type: 'مكية', ayahCount: 15 },    // الشمس
    { type: 'مكية', ayahCount: 21 },    // الليل
    { type: 'مكية', ayahCount: 11 },    // الضحى
    { type: 'مكية', ayahCount: 8 },     // الشرح
    { type: 'مكية', ayahCount: 8 },     // التين
    { type: 'مكية', ayahCount: 5 },     // العلق
    { type: 'مكية', ayahCount: 5 },     // القدر
    { type: 'مكية', ayahCount: 8 },     // البينة
    { type: 'مكية', ayahCount: 8 },     // الزلزلة
    { type: 'مكية', ayahCount: 11 },    // العاديات
    { type: 'مكية', ayahCount: 8 },     // القارعة
    { type: 'مكية', ayahCount: 8 },     // التكاثر
    { type: 'مكية', ayahCount: 3 },     // العصر
    { type: 'مكية', ayahCount: 9 },     // الهمزة
    { type: 'مكية', ayahCount: 5 },     // الفيل
    { type: 'مكية', ayahCount: 4 },     // قريش
    { type: 'مكية', ayahCount: 7 },     // الماعون
    { type: 'مكية', ayahCount: 3 },     // الكوثر
    { type: 'مكية', ayahCount: 6 },     // الكافرون
    { type: 'مكية', ayahCount: 3 },     // النصر
    { type: 'مكية', ayahCount: 5 },     // المسد
    { type: 'مكية', ayahCount: 5 },     // الإخلاص
    { type: 'مكية', ayahCount: 5 },     // الفلق
    { type: 'مكية', ayahCount: 6 }      // الناس
];

// قائمة القراء
const RECITERS = {
    'ar.alafasy': 'مشاري العفاسي',
    'ar.husary': 'محمود خليل الحصري',
    'ar.minshawi': 'محمد صديق المنشاوي',
    'ar.muhammadayyoub': 'محمد أيوب'
};

// متغير عام لتخزين القارئ الحالي
let currentReciter = 'ar.alafasy';

// متغير عام لتخزين مشغل الصوت الحالي
let currentAudioPlayer = null;

// دالة إنشاء نافذة الصوت مع نص الآية
function createAudioModalWithText(ayahData, audioSrc, selectedReciter) {
    // استخراج معلومات الآية
    const ayahText = ayahData.text;
    const surahName = ayahData.surah.name;
    const ayahNumberInSurah = ayahData.numberInSurah;
    const ayahNumber = ayahData.number;
    const surahNumber = ayahData.surah.number;

    // إنشاء نافذة الصوت
    const modal = document.createElement('div');
    modal.id = 'audio-modal';
    modal.className = 'audio-modal';

    // محتوى النافذة
    modal.innerHTML = `
        <div class="audio-modal-content">
            <div class="audio-modal-header">
                <h3>${surahName} - الآية ${ayahNumberInSurah}</h3>
                <button class="close-modal-btn" onclick="closeAudioModal(${surahNumber}, ${ayahNumberInSurah})">×</button>
            </div>
            <div class="audio-player-container">
                <select id="reciter-select" class="reciter-dropdown">
                    <option value="ar.alafasy">محمد العفاسي</option>
                    <option value="ar.husary">محمود خليل الحصري</option>
                    <option value="ar.minshawi">محمد صديق المنشاوي</option>
                </select>
                <audio id="modal-audio-player" controls>
                    <source src="${audioSrc}" type="audio/mpeg">
                </audio>
                <div class="audio-progress">
                    <span id="current-ayah">الآية: ${ayahNumberInSurah}</span>
                    <span id="total-ayahs">من سورة ${surahName}</span>
                </div>
                <div class="ayah-text-container">
                    <div class="ayah-info">
                        <span class="surah-name">${surahName}</span>
                        <span class="ayah-number">الآية ${ayahNumberInSurah}</span>
                    </div>
                    <div class="ayah-text-display">${ayahText}</div>
                </div>
            </div>
        </div>
    `;

    // إضافة النافذة إلى الصفحة
    document.body.appendChild(modal);

    return modal;
}

// دالة إغلاق المشغل مع إعادة الآيات
function closeAudioModal(surahNumber, ayahNumber) {
    // إزالة النافذة الصوتية
    const audioModal = document.getElementById('audio-modal');
    if (audioModal) {
        audioModal.remove();
    }

    // إيقاف التشغيل الصوتي
    const audioPlayer = document.getElementById('modal-audio-player');
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = '';
    }

    // إعادة عرض جميع الآيات
    const allAyaContainers = document.querySelectorAll('.aya-container');
    allAyaContainers.forEach(container => {
        container.style.display = 'block';
        container.classList.remove('current-ayah');
    });
}

// دالة تشغيل الآية
function playAyah(surahNumber, ayahNumber, reciter = null) {
    // إغلاق أي مشغل موجود
    closeAudioModal();

    let selectedReciter = reciter || currentReciter || 'ar.alafasy';

    // إخفاء جميع الآيات
    const allAyaContainers = document.querySelectorAll('.aya-container');
    allAyaContainers.forEach(container => {
        container.style.display = 'none';
    });

    fetch(`https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}`)
        .then(response => response.json())
        .then(data => {
            // إنشاء نافذة الصوت مع نص الآية
            const modal = createAudioModalWithText(data.data);
            const modalAudioPlayer = modal.querySelector('#modal-audio-player');
            const reciterSelect = modal.querySelector('#reciter-select');

            // تعيين القارئ الحالي
            reciterSelect.value = selectedReciter;
            currentReciter = selectedReciter;

            // جلب الصوت
            const audioUrl = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/${selectedReciter}`;
            const cacheKey = `ayah_${surahNumber}_${ayahNumber}_${selectedReciter}`;

            fetch(audioUrl)
                .then(response => response.json())
                .then(async (audioData) => {
                    if (audioData.data && audioData.data.audio) {
                        // تنزيل وتخزين الملف الصوتي
                        const cachedAudioSrc = await downloadAndCacheAudio(audioData.data.audio, cacheKey);
                        
                        modalAudioPlayer.src = cachedAudioSrc;
                        modalAudioPlayer.play();

                        // تظليل الآية الحالية
                        highlightCurrentAyah(`${surahNumber}:${ayahNumber}`);
                    } else {
                        showError('عذراً، لم يتم العثور على الملف الصوتي');
                    }
                })
                .catch(error => {
                    console.error('خطأ في جلب الصوت:', error);
                    showError('عذراً، حدث خطأ في تشغيل الآية');
                });

            // استماع لتغيير القارئ
            reciterSelect.addEventListener('change', () => {
                const newReciter = reciterSelect.value;
                currentReciter = newReciter;
                
                // إعادة تشغيل الآية بالقارئ الجديد
                playAyah(surahNumber, ayahNumber, newReciter);
            });
        })
        .catch(error => {
            console.error('خطأ في جلب معلومات الآية:', error);
            showError('عذراً، حدث خطأ في جلب معلومات الآية');
        });
}

// دالة تشغيل السورة كاملة
function playSurah(surahNumber) {
    // إغلاق أي مشغل موجود
    closeAudioModal();

    let selectedReciter = currentReciter || 'ar.alafasy';

    // إخفاء جميع الآيات
    const allAyaContainers = document.querySelectorAll('.aya-container');
    allAyaContainers.forEach(container => {
        container.style.display = 'none';
    });

    fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
        .then(response => response.json())
        .then(async (data) => {
            const totalAyahs = data.data.numberOfAyahs;

            // إنشاء نافذة الصوت
            const modal = createSurahAudioModal(surahNumber, totalAyahs);
            const modalAudioPlayer = modal.querySelector('#modal-audio-player');
            const currentAyahSpan = modal.querySelector('#current-ayah');
            const totalAyahsSpan = modal.querySelector('#total-ayahs');
            const reciterSelect = modal.querySelector('#reciter-select');
            const closeBtn = modal.querySelector('.close-modal-btn');

            // تعديل زر الإغلاق ليعيد الآيات
            closeBtn.setAttribute('onclick', `closeAudioModal(${surahNumber}, 1)`);

            // تعيين القارئ الحالي
            reciterSelect.value = selectedReciter;

            // دالة تشغيل الآية التالية مع التخزين المؤقت
            async function playNextAyah(currentAyahIndex, reciter) {
                if (currentAyahIndex > totalAyahs) {
                    currentAyahSpan.textContent = 'انتهت السورة';
                    
                    // إعادة عرض جميع الآيات
                    const allAyaContainers = document.querySelectorAll('.aya-container');
                    allAyaContainers.forEach(container => {
                        container.style.display = 'block';
                    });
                    
                    return;
                }

                // إخفاء جميع الآيات
                const allAyaContainers = document.querySelectorAll('.aya-container');
                allAyaContainers.forEach(container => {
                    container.style.display = 'none';
                });

                // إظهار الآية الحالية
                const currentAyahContainer = document.querySelector(`.aya-container[data-ayah-number="${surahNumber}:${currentAyahIndex}"]`);
                if (currentAyahContainer) {
                    currentAyahContainer.style.display = 'block';
                }

                const audioUrl = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${currentAyahIndex}/${reciter}`;
                const cacheKey = `ayah_${surahNumber}_${currentAyahIndex}_${reciter}`;

                try {
                    const [ayahResponse, audioResponse] = await Promise.all([
                        fetch(`https://api.alquran.cloud/v1/ayah/${surahNumber}:${currentAyahIndex}`),
                        fetch(audioUrl)
                    ]);

                    const ayahData = await ayahResponse.json();
                    const audioData = await audioResponse.json();

                    if (audioData.data && audioData.data.audio) {
                        // تنزيل وتخزين الملف الصوتي
                        const cachedAudioSrc = await downloadAndCacheAudio(audioData.data.audio, cacheKey);
                        
                        modalAudioPlayer.src = cachedAudioSrc;
                        modalAudioPlayer.play();

                        // تحديث معلومات التقدم
                        currentAyahSpan.textContent = `الآية: ${currentAyahIndex}`;

                        // تظليل الآية الحالية
                        highlightCurrentAyah(`${surahNumber}:${currentAyahIndex}`);

                        // عرض نص الآية
                        const ayahTextContainer = modal.querySelector('.ayah-text-container');
                        if (!ayahTextContainer) {
                            const textContainer = document.createElement('div');
                            textContainer.className = 'ayah-text-container';
                            textContainer.innerHTML = `
                                <div class="ayah-info">
                                    <span class="surah-name">${ayahData.data.surah.name}</span>
                                    <span class="ayah-number">الآية ${ayahData.data.numberInSurah}</span>
                                </div>
                                <div class="ayah-text-display">${ayahData.data.text}</div>
                            `;
                            modal.querySelector('.audio-modal-content').appendChild(textContainer);
                        } else {
                            ayahTextContainer.querySelector('.surah-name').textContent = ayahData.data.surah.name;
                            ayahTextContainer.querySelector('.ayah-number').textContent = `الآية ${ayahData.data.numberInSurah}`;
                            ayahTextContainer.querySelector('.ayah-text-display').textContent = ayahData.data.text;
                        }

                        // الانتقال للآية التالية عند انتهاء الآية الحالية
                        modalAudioPlayer.onended = () => {
                            playNextAyah(currentAyahIndex + 1, reciter);
                        };
                    } else {
                        showError('عذراً، لم يتم العثور على الملف الصوتي');
                    }
                } catch (error) {
                    console.error('خطأ في جلب الصوت:', error);
                    showError('عذراً، حدث خطأ في تشغيل الآية');
                }
            }

            // استماع لتغيير القارئ
            reciterSelect.addEventListener('change', () => {
                selectedReciter = reciterSelect.value;
                currentReciter = selectedReciter; // تحديث القارئ الحالي
                
                // استخراج رقم الآية الحالية
                const currentAyahText = currentAyahSpan.textContent;
                const currentAyahIndex = parseInt(currentAyahText.split(': ')[1] || '1');
                
                // إعادة تشغيل السورة من الآية الحالية مع القارئ الجديد
                playNextAyah(currentAyahIndex, selectedReciter);
            });

            // بدء التشغيل من الآية الأولى
            playNextAyah(1, selectedReciter);
        })
        .catch(error => {
            console.error('خطأ في جلب معلومات السورة:', error);
            showError('عذراً، حدث خطأ في جلب معلومات السورة');
        });
}

// دالة لفتح قاعدة بيانات IndexedDB
function openAudioDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('QuranAudioCache', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('audioFiles')) {
                db.createObjectStore('audioFiles', { keyPath: 'key' });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

// دالة لحفظ الملف الصوتي في IndexedDB
async function cacheAudioFile(key, audioBlob) {
    try {
        const db = await openAudioDatabase();
        const transaction = db.transaction(['audioFiles'], 'readwrite');
        const store = transaction.objectStore('audioFiles');

        return new Promise((resolve, reject) => {
            const request = store.put({ key, blob: audioBlob });
            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(false);
        });
    } catch (error) {
        console.error('خطأ في تخزين الملف الصوتي:', error);
        return false;
    }
}

// دالة لجلب الملف الصوتي من IndexedDB
async function getCachedAudioFile(key) {
    try {
        const db = await openAudioDatabase();
        const transaction = db.transaction(['audioFiles'], 'readonly');
        const store = transaction.objectStore('audioFiles');

        return new Promise((resolve, reject) => {
            const request = store.get(key);
            request.onsuccess = (event) => {
                resolve(event.target.result ? event.target.result.blob : null);
            };
            request.onerror = () => reject(null);
        });
    } catch (error) {
        console.error('خطأ في جلب الملف الصوتي:', error);
        return null;
    }
}

// دالة لتنزيل وتخزين الملف الصوتي
async function downloadAndCacheAudio(audioUrl, key) {
    try {
        // التحقق من وجود الملف في التخزين المؤقت أولاً
        const cachedBlob = await getCachedAudioFile(key);
        if (cachedBlob) {
            return URL.createObjectURL(cachedBlob);
        }

        // تنزيل الملف الصوتي
        const response = await fetch(audioUrl);
        const audioBlob = await response.blob();

        // تخزين الملف
        await cacheAudioFile(key, audioBlob);

        // إنشاء رابط للكائن
        return URL.createObjectURL(audioBlob);
    } catch (error) {
        console.error('خطأ في تنزيل وتخزين الملف الصوتي:', error);
        return audioUrl; // العودة للرابط الأصلي في حالة الفشل
    }
}

// دالة إنشاء نافذة الصوت للسورة
function createSurahAudioModal(surahNumber, totalAyahs) {
    // إنشاء النافذة المنبثقة
    const modal = document.createElement('div');
    modal.id = 'audio-modal';
    modal.className = 'audio-modal';
    modal.innerHTML = `
        <div class="audio-modal-content">
            <div class="audio-modal-header">
                <h3>تشغيل السورة كاملة</h3>
                <button class="close-modal-btn">&times;</button>
            </div>
            <div class="reciter-selector">
                <label for="reciter-select">اختر القارئ:</label>
                <select id="reciter-select">
                    <option value="ar.alafasy">مشاري العفاسي</option>
                    <option value="ar.husary">محمود خليل الحصري</option>
                    <option value="ar.minshawi">محمد صديق المنشاوي</option>
                </select>
            </div>
            <audio id="modal-audio-player" controls style="width: 100%; margin-top: 15px;"></audio>
            <div id="surah-progress" class="surah-progress">
                <span id="current-ayah">الآية: 0</span>
                <span id="total-ayahs"></span>
            </div>
        </div>
    `;

    // إضافة النافذة للصفحة
    document.body.appendChild(modal);

    // تحديد العناصر
    const closeBtn = modal.querySelector('.close-modal-btn');
    const reciterSelect = modal.querySelector('#reciter-select');
    const modalAudioPlayer = modal.querySelector('#modal-audio-player');
    const currentAyahSpan = modal.querySelector('#current-ayah');
    const totalAyahsSpan = modal.querySelector('#total-ayahs');

    // تعيين القارئ الحالي
    reciterSelect.value = currentReciter;

    // إغلاق النافذة
    closeBtn.addEventListener('click', () => {
        modal.remove();
        if (modalAudioPlayer) {
            modalAudioPlayer.pause();
            modalAudioPlayer.src = '';
        }
    });

    // إغلاق النافذة عند النقر خارجها
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            if (modalAudioPlayer) {
                modalAudioPlayer.pause();
                modalAudioPlayer.src = '';
            }
        }
    });

    return modal;
}

// دالة تظليل الآية الحالية أثناء التشغيل
function highlightCurrentAyah(ayahNumber) {
    // إزالة التظليل عن جميع الآيات
    const allAyaContainers = document.querySelectorAll('.aya-container');
    allAyaContainers.forEach(container => {
        container.classList.remove('playing', 'current-ayah');
    });

    // العثور على حاوية الآية الحالية
    const currentAyahContainer = document.querySelector(`.aya-container[data-ayah-number="${ayahNumber}"]`);
    
    if (currentAyahContainer) {
        // إضافة فئات التظليل
        currentAyahContainer.classList.add('playing', 'current-ayah');

        // التمرير التلقائي للآية الحالية في وضع السورة الكاملة
        const audioModal = document.querySelector('.audio-modal');
        if (audioModal) {
            // التمرير لجعل الآية الحالية في منتصف العرض
            currentAyahContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
}

// وظيفة تغيير القارئ
function changeReciter() {
    const reciterSelect = document.getElementById('reciter-select');
    currentReciter = reciterSelect.value;
    
    // إعادة تحميل السورة الحالية مع القارئ الجديد
    const urlParams = new URLSearchParams(window.location.search);
    const surahNumber = parseInt(urlParams.get('surah')) || 1;
    
    // إعادة تهيئة صفحة القراءة مع القارئ الجديد
    initializeReadPage();
}

// دالة عرض التفسير
async function showTafseer(ayahNumber) {
    try {
        // الحصول على التفسير من API التفسير
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.muyassar`);
        const data = await response.json();
        
        if (data.code === 200) {
            const tafseerText = data.data.text;
            
            // إنشاء نافذة منبثقة للتفسير
            const modal = document.createElement('div');
            modal.className = 'tafseer-modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'tafseer-content';
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-btn';
            closeBtn.innerHTML = '×';
            closeBtn.onclick = () => document.body.removeChild(modal);
            
            const tafseerContent = document.createElement('div');
            tafseerContent.className = 'tafseer-text';
            tafseerContent.textContent = tafseerText;
            
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(tafseerContent);
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // إغلاق النافذة عند النقر خارجها
            modal.onclick = (e) => {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            };
        } else {
            showError('عذراً، حدث خطأ في تحميل التفسير');
        }
    } catch (error) {
        console.error('Error showing tafseer:', error);
        showError('عذراً، حدث خطأ في عرض التفسير');
    }
}

// وظيفة إظهار رسائل الخطأ
function showError(message) {
    // إزالة أي رسائل خطأ سابقة
    const existingErrors = document.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 0, 0, 0.8);
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        text-align: center;
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    // إخفاء رسالة الخطأ بعد 3 ثوانٍ
    setTimeout(() => {
        document.body.removeChild(errorDiv);
    }, 3000);
}

// إنشاء قائمة السور
function createSurahGrid(surahGrid) {
    // التأكد من وجود العنصر
    if (!surahGrid) return;

    // مسح أي محتوى موجود مسبقًا
    surahGrid.innerHTML = '';

    // إنشاء بطاقة لكل سورة
    surahs.forEach((surahName, index) => {
        const surahNumber = index + 1;
        const surahCard = document.createElement('div');
        surahCard.className = 'surah-card';
        surahCard.setAttribute('data-surah-number', surahNumber);
        surahCard.setAttribute('aria-label', `سورة ${surahName}`);
        
        // رقم السورة
        const surahNumberSpan = document.createElement('span');
        surahNumberSpan.className = 'surah-number';
        surahNumberSpan.textContent = surahNumber;
        
        // اسم السورة
        const surahNameSpan = document.createElement('span');
        surahNameSpan.className = 'surah-name';
        surahNameSpan.textContent = surahName;
        
        // معلومات السورة الإضافية
        const surahInfoSpan = document.createElement('span');
        surahInfoSpan.className = 'surah-info';
        const { type, ayahCount } = surahDetails[index] || { type: 'غير معروف', ayahCount: 0 };
        surahInfoSpan.textContent = `${type} - ${ayahCount} آية`;
        
        // زر الاستماع
        const playButton = document.createElement('button');
        playButton.className = 'play-surah-btn';
        playButton.innerHTML = '🔊';
        playButton.setAttribute('aria-label', `استمع لسورة ${surahName}`);
        playButton.addEventListener('click', (e) => {
            e.stopPropagation(); // منع انتشار الحدث
            playSurah(surahNumber);
        });
        
        // الانتقال لصفحة القراءة عند النقر على البطاقة
        surahCard.addEventListener('click', () => {
            window.location.href = `read.html?surah=${surahNumber}`;
        });

        // تجميع العناصر
        surahCard.appendChild(surahNumberSpan);
        surahCard.appendChild(surahNameSpan);
        surahCard.appendChild(surahInfoSpan);
        surahCard.appendChild(playButton);
        
        // إضافة البطاقة للشبكة
        surahGrid.appendChild(surahCard);
    });
}

// Try multiple selectors to find the surah name element
function createSurahPlayButton(surahNumber) {
    const surahNameElements = [
        document.querySelector('.surah-name'),
        document.querySelector('.surah-title'),
        document.querySelector('h1.surah-header')
    ];

    const surahNameElement = surahNameElements.find(el => el !== null);

    // 检查是否 في صفحة القراءة
    const isReadPage = window.location.pathname.includes('read.html') || 
                       document.querySelector('.quran-page') !== null;

    if (surahNameElement && !isReadPage) {
        // Check if button already exists to prevent duplicates
        if (!surahNameElement.querySelector('.play-full-surah-btn')) {
            const playFullSurahButton = document.createElement('button');
            playFullSurahButton.innerHTML = '🔊 استمع للسورة كاملة';
            playFullSurahButton.className = 'play-full-surah-btn';
            playFullSurahButton.addEventListener('click', () => {
                playSurah(surahNumber);
            });
            surahNameElement.appendChild(playFullSurahButton);
        }
    }
}

// Multiple event listeners to ensure the button is added
document.addEventListener('DOMContentLoaded', () => {
    const surahNumberMatch = window.location.href.match(/surah\/(\d+)/);
    if (surahNumberMatch) {
        const surahNumber = parseInt(surahNumberMatch[1]);
        createSurahPlayButton(surahNumber);
    }
});

// Fallback for dynamically loaded content
window.addEventListener('load', () => {
    const surahNumberMatch = window.location.href.match(/surah\/(\d+)/);
    if (surahNumberMatch) {
        const surahNumber = parseInt(surahNumberMatch[1]);
        createSurahPlayButton(surahNumber);
    }
});

// التأكد من وجود مشغل الصوت
document.addEventListener('DOMContentLoaded', () => {
    // التأكد من وجود مشغل الصوت في صفحة القراءة
    if (!document.getElementById('audio-player')) {
        const audioPlayer = document.createElement('audio');
        audioPlayer.id = 'audio-player';
        audioPlayer.controls = true;
        audioPlayer.style.display = 'none';
        document.body.appendChild(audioPlayer);
    }
});

// إضافة مستمع لحدث انتهاء التشغيل
document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', () => {
            // إزالة التظليل عن الآية الحالية
            const ayaContainers = document.querySelectorAll('.aya-container');
            ayaContainers.forEach(container => {
                container.classList.remove('playing');
            });
        });
    }
});

// استدعاء تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', async function() {
    // إنشاء شبكة السور إذا كنا في صفحة اختيار السور
    const surahGrid = document.getElementById('surah-grid');
    if (surahGrid) {
        createSurahGrid(surahGrid);
        return;
    }

    // إذا كنا في صفحة القراءة
    const ayatContainer = document.getElementById('ayat-container');
    if (ayatContainer) {
        initializeReadPage();
    }
});

// تعديل دالة initializeReadPage لإضافة رقم الآية كسمة
async function initializeReadPage() {
    // استخراج رقم السورة من عنوان الصفحة
    const urlParams = new URLSearchParams(window.location.search);
    const surahNumber = urlParams.get('surah');

    if (surahNumber) {
        // جلب معلومات السورة
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
            .then(response => response.json())
            .then(data => {
                // عرض اسم السورة
                const surahNameElement = document.querySelector('#surah-title');
                const surahTypeElement = document.querySelector('#surah-type');
                const ayahCountElement = document.querySelector('#ayah-count');

                if (surahNameElement) {
                    surahNameElement.textContent = data.data.name;
                }

                // إضافة معلومات السورة
                if (surahTypeElement) {
                    surahTypeElement.textContent = data.data.revelationType === 'Meccan' ? 'مكية' : 'مدنية';
                }

                if (ayahCountElement) {
                    ayahCountElement.textContent = `عدد الآيات: ${data.data.numberOfAyahs}`;
                }

                // إنشاء زر تشغيل السورة كاملة
                createSurahPlayButton(parseInt(surahNumber));

                // إنشاء الآيات
                const ayahsContainer = document.querySelector('#ayat-container');
                
                if (ayahsContainer) {
                    data.data.ayahs.forEach((ayah, index) => {
                        const ayahContainer = document.createElement('div');
                        ayahContainer.className = 'aya-container';
                        ayahContainer.setAttribute('data-ayah-number', `${surahNumber}:${ayah.numberInSurah}`);

                        // النص العربي
                        const ayahText = document.createElement('div');
                        ayahText.className = 'aya-text';
                        ayahText.textContent = ayah.text;

                        // رقم الآية
                        const ayahNumber = document.createElement('div');
                        ayahNumber.className = 'aya-number';
                        ayahNumber.textContent = ayah.numberInSurah;

                        // أزرار التحكم
                        const controls = document.createElement('div');
                        controls.className = 'aya-controls';
                        
                        const listenBtn = document.createElement('button');
                        listenBtn.innerHTML = '🔊';
                        listenBtn.title = 'استماع';
                        listenBtn.onclick = () => playAyah(surahNumber, ayah.numberInSurah);
                        
                        const tafseerBtn = document.createElement('button');
                        tafseerBtn.innerHTML = '📖';
                        tafseerBtn.title = 'تفسير';
                        tafseerBtn.onclick = () => showTafseer(`${surahNumber}:${ayah.numberInSurah}`);
                        
                        controls.appendChild(listenBtn);
                        controls.appendChild(tafseerBtn);

                        ayahContainer.appendChild(ayahNumber);
                        ayahContainer.appendChild(ayahText);
                        ayahContainer.appendChild(controls);

                        ayahsContainer.appendChild(ayahContainer);
                    });
                }
            })
            .catch(error => {
                console.error('خطأ في جلب بيانات السورة:', error);
                showError('عذراً، حدث خطأ في تحميل السورة');
            });
    } else {
        showError('رقم السورة غير صالح');
    }
}
