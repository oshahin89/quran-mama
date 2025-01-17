// قائمة أسماء السور
const surahs = ['الفاتحة', 'البقرة', 'آل عمران', 'النساء', 'المائدة', 'الأنعام', 'الأعراف', 'الأنفال', 'التوبة', 'يونس', 'هود', 'يوسف', 'الرعد', 'إبراهيم', 'الحجر', 'النحل', 'الإسراء', 'الكهف', 'مريم', 'طه', 'الأنبياء', 'الحج', 'المؤمنون', 'النور', 'الفرقان', 'الشعراء', 'النمل', 'القصص', 'العنكبوت', 'الروم', 'لقمان', 'السجدة', 'الأحزاب', 'سبأ', 'فاطر', 'يس', 'الصافات', 'ص', 'الزمر', 'غافر', 'فصلت', 'الشورى', 'الزخرف', 'الدخان', 'الجاثية', 'الأحقاف', 'محمد', 'الفتح', 'الحجرات', 'ق', 'الذاريات', 'الطور', 'النجم', 'القمر', 'الرحمن', 'الواقعة', 'الحديد', 'المجادلة', 'الحشر', 'الممتحنة', 'الصف', 'الجمعة', 'المنافقون', 'التغابن', 'الطلاق', 'التحريم', 'الملك', 'القلم', 'الحاقة', 'المعارج', 'نوح', 'الجن', 'المزمل', 'المدثر', 'القيامة', 'الإنسان', 'المرسلات', 'النبأ', 'النازعات', 'عبس', 'التكوير', 'الانفطار', 'المطففين', 'الانشقاق', 'البروج', 'الطارق', 'الأعلى', 'الغاشية', 'الفجر', 'البلد', 'الشمس', 'الليل', 'الضحى', 'الشرح', 'التين', 'العلق', 'القدر', 'البينة', 'الزلزلة', 'العاديات', 'القارعة', 'التكاثر', 'العصر', 'الهمزة', 'الفيل', 'قريش', 'الماعون', 'الكوثر', 'الكافرون', 'النصر', 'المسد', 'الإخلاص', 'الفلق', 'الناس'];

// قائمة القراء
const RECITERS = {
    'ar.alafasy': 'مشاري العفاسي',
    'ar.abdurrahmaansudais': 'عبد الرحمن السديس',
    'ar.hudhaify': 'الحذيفي',
    'ar.minshawi': 'محمد صديق المنشاوي',
    'ar.muhammadayyoub': 'محمد أيوب'
};

// متغير عام لتخزين القارئ الحالي
let currentReciter = 'ar.alafasy';

// متغير عام لتخزين مشغل الصوت الحالي
let currentAudioPlayer = null;

// دالة إنشاء نافذة منبثقة للاستماع
function createAudioModal(ayahNumber) {
    // إزالة أي نوافذ موجودة مسبقًا
    const existingModal = document.getElementById('audio-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // إنشاء النافذة المنبثقة
    const modal = document.createElement('div');
    modal.id = 'audio-modal';
    modal.className = 'audio-modal';
    modal.innerHTML = `
        <div class="audio-modal-content">
            <div class="audio-modal-header">
                <h3>تشغيل الآية</h3>
                <button class="close-modal-btn">&times;</button>
            </div>
            <div class="reciter-selector">
                <label for="reciter-select">اختر القارئ:</label>
                <select id="reciter-select">
                    <option value="ar.alafasy">مشاري العفاسي</option>
                    <option value="ar.husary">محمود خليل الحصري</option>
                    <option value="ar.minshawi">محمد صديق المنشاوي</option>
                    <option value="ar.shatri">سعد الغامدي</option>
                </select>
            </div>
            <audio id="modal-audio-player" controls style="width: 100%; margin-top: 15px;"></audio>
        </div>
    `;

    // إضافة النافذة للصفحة
    document.body.appendChild(modal);

    // تحديد العناصر
    const closeBtn = modal.querySelector('.close-modal-btn');
    const reciterSelect = modal.querySelector('#reciter-select');
    const modalAudioPlayer = modal.querySelector('#modal-audio-player');

    // تعيين القارئ الحالي
    reciterSelect.value = currentReciter;

    // إغلاق النافذة
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // تشغيل الآية مباشرة
    const selectedReciter = reciterSelect.value;
    
    // رابط الصوت مع القارئ المحدد
    const audioUrl = `https://api.alquran.cloud/v1/ayah/${ayahNumber}/${selectedReciter}`;
    
    fetch(audioUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('فشل في جلب الصوت');
            }
            return response.json();
        })
        .then(data => {
            if (data.data && data.data.audio) {
                modalAudioPlayer.src = data.data.audio;
                modalAudioPlayer.play();
                
                // تحديث القارئ الحالي
                currentReciter = selectedReciter;
                
                // تظليل الآية
                highlightCurrentAyah(ayahNumber);
                
                // استماع لتغيير القارئ
                reciterSelect.addEventListener('change', () => {
                    const newReciter = reciterSelect.value;
                    const newAudioUrl = `https://api.alquran.cloud/v1/ayah/${ayahNumber}/${newReciter}`;
                    
                    fetch(newAudioUrl)
                        .then(response => response.json())
                        .then(newData => {
                            if (newData.data && newData.data.audio) {
                                modalAudioPlayer.src = newData.data.audio;
                                modalAudioPlayer.play();
                                currentReciter = newReciter;
                            } else {
                                // محاولة بديلة للقارئ سعد الغامدي
                                if (newReciter === 'ar.shatri') {
                                    const alternativeUrl = `https://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.hudhaify`;
                                    fetch(alternativeUrl)
                                        .then(altResponse => altResponse.json())
                                        .then(altData => {
                                            if (altData.data && altData.data.audio) {
                                                modalAudioPlayer.src = altData.data.audio;
                                                modalAudioPlayer.play();
                                                currentReciter = 'ar.hudhaify';
                                                showError('تم التبديل إلى قارئ بديل');
                                            }
                                        });
                                }
                            }
                        })
                        .catch(error => {
                            console.error('خطأ في تغيير القارئ:', error);
                            showError('عذراً، حدث خطأ في تغيير القارئ');
                        });
                });
            } else {
                // محاولة بديلة للقارئ سعد الغامدي
                if (selectedReciter === 'ar.shatri') {
                    const alternativeUrl = `https://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.hudhaify`;
                    fetch(alternativeUrl)
                        .then(altResponse => {
                            if (!altResponse.ok) {
                                throw new Error('فشل في جلب الصوت البديل');
                            }
                            return altResponse.json();
                        })
                        .then(altData => {
                            if (altData.data && altData.data.audio) {
                                modalAudioPlayer.src = altData.data.audio;
                                modalAudioPlayer.play();
                                currentReciter = 'ar.hudhaify';
                                showError('تم التبديل إلى قارئ بديل');
                            } else {
                                showError('عذراً، حدث خطأ في تشغيل الآية');
                            }
                        })
                        .catch(error => {
                            console.error('خطأ في جلب الصوت البديل:', error);
                            showError('عذراً، حدث خطأ في تشغيل الآية');
                        });
                } else {
                    showError('عذراً، حدث خطأ في تشغيل الآية');
                }
            }
        })
        .catch(error => {
            console.error('خطأ في جلب الصوت:', error);
            showError('عذراً، حدث خطأ في تشغيل الآية');
        });

    // إغلاق النافذة عند النقر خارجها
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// دالة تشغيل الآية مع معالجة متقدمة
function playAyah(ayahNumber) {
    createAudioModal(ayahNumber);
}

// دالة لتظليل الآية الحالية أثناء التشغيل
function highlightCurrentAyah(ayahNumber) {
    // إزالة التظليل عن جميع الآيات
    const ayaContainers = document.querySelectorAll('.aya-container');
    ayaContainers.forEach(container => {
        container.classList.remove('playing');
    });

    // العثور على الآية وتظليلها
    const currentAyahContainer = document.querySelector(`.aya-container[data-ayah-number="${ayahNumber}"]`);
    if (currentAyahContainer) {
        currentAyahContainer.classList.add('playing');
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

// إنشاء شبكة السور
function createSurahGrid(surahGrid) {
    surahs.forEach((surah, index) => {
        const card = document.createElement('div');
        card.className = 'surah-card';
        card.onclick = () => window.location.href = `read.html?surah=${index + 1}`;
        
        const name = document.createElement('div');
        name.className = 'surah-name';
        name.textContent = surah;
        
        const number = document.createElement('div');
        number.className = 'surah-number';
        number.textContent = index + 1;
        
        const info = document.createElement('div');
        info.className = 'surah-info';
        info.textContent = 'انقر للقراءة';
        
        card.appendChild(number);
        card.appendChild(name);
        card.appendChild(info);
        surahGrid.appendChild(card);
    });
}

// تعديل دالة initializeReadPage لإضافة رقم الآية كسمة
async function initializeReadPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const surahNumber = parseInt(urlParams.get('surah')) || 1;

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/${currentReciter}`);
        if (!response.ok) throw new Error('Failed to fetch surah');
        
        const data = await response.json();
        const surah = data.data;
        
        // تحديث معلومات السورة
        const surahHeader = document.querySelector('.surah-name');
        if (surahHeader) {
            surahHeader.innerHTML = `${surah.name}`;
        }

        // تحديد حاوية الآيات
        const ayatContainer = document.getElementById('ayat-container');
        ayatContainer.innerHTML = ''; // مسح المحتوى السابق

        // إضافة البسملة فقط للسور التي يجب إضافتها
        const suraWithBismillah = [9]; // السور التي لا نريد إضافة البسملة لها
        if (!suraWithBismillah.includes(surahNumber)) {
            const bismillahDiv = document.createElement('div');
            bismillahDiv.className = 'bismillah';
            bismillahDiv.textContent = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
            ayatContainer.appendChild(bismillahDiv);
        }

        // عرض الآيات
        surah.ayahs.forEach((ayah, index) => {
            // إزالة بسم الله من الآية الأولى للسور غير الفاتحة
            let ayahText = ayah.text;
            const bismillah = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
            
            // شرط لحذف بسم الله من الآية الأولى للسور غير الفاتحة
            if (index === 0 && surahNumber !== 1 && ayahText.includes(bismillah)) {
                ayahText = ayahText.replace(bismillah, '').trim();
            }
            
            const ayahDiv = document.createElement('div');
            ayahDiv.className = 'aya-container';
            // إضافة رقم الآية كسمة
            ayahDiv.setAttribute('data-ayah-number', ayah.number);
            
            const ayaText = document.createElement('div');
            ayaText.className = 'aya';
            ayaText.innerHTML = `${ayahText} <span class="aya-number">${ayah.numberInSurah}</span>`;
            
            const controls = document.createElement('div');
            controls.className = 'aya-controls';
            
            const listenBtn = document.createElement('button');
            listenBtn.innerHTML = '🔊';
            listenBtn.title = 'استماع';
            listenBtn.onclick = () => playAyah(ayah.number);
            
            const tafseerBtn = document.createElement('button');
            tafseerBtn.innerHTML = '📖';
            tafseerBtn.title = 'تفسير';
            tafseerBtn.onclick = () => showTafseer(ayah.number);
            
            controls.appendChild(listenBtn);
            controls.appendChild(tafseerBtn);
            ayahDiv.appendChild(ayaText);
            ayahDiv.appendChild(controls);
            ayatContainer.appendChild(ayahDiv);
        });

        // تحديث اختيار القارئ الحالي في القائمة
        const reciterSelect = document.getElementById('reciter-select');
        if (reciterSelect) {
            reciterSelect.value = currentReciter;
        }
    } catch (error) {
        console.error('Error initializing read page:', error);
        showError('عذراً، حدث خطأ في تحميل السورة');
    }
}

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
            // إزالة التظليل عند انتهاء التشغيل
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
