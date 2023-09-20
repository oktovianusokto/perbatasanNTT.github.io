function searchProvinsi() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const provinsiList = [
        'Kecamatan Kobalima Timur',
        'Kecamatan Kobalima',
        'Kecamatan Malaka Tengah',
        'Kecamatan Malaka Barat',
        'Kecamatan Wewiku'
    ];
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    for (const provinsi of provinsiList) {
        if (provinsi.toLowerCase().includes(searchInput)) {
            const resultItem = document.createElement('div');
            resultItem.classList.add('document');
            resultItem.innerHTML = `<h2>${provinsi}</h2><button onclick="showDocument('${provinsi}')" style="font-size: 12px;">Tampilkan Dokumen</button>`;
            searchResults.appendChild(resultItem);
        }
    }
}

function showDocument(provinsi) {
    const documentUrls = {
        'Kecamatan Kobalima Timur': [
            'pdf_files/pdf_files/Kecamatan Kobalima Timur.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima Timur 2011.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima Timur 2012.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima Timur 2013.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima Timur 2014.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima Timur 2015.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima Timur 2016.pdf'
        ],
        'Kecamatan Kobalima': [
            'pdf_files/Kecamatan Kobalima.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima 2011.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima 2012.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima 2013.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima 2014.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima 2015.pdf',
            'pdf_files/Statistik Daerah Kecamatan Kobalima 2016.pdf'
        ],
        'Kecamatan Malaka Tengah': [
            'pdf_files/pdf_files/Kecamatan Malaka Tengah.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Tengah 2011.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Tengah 2012.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Tengah 2013.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Tengah 2014.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Tengah 2015.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Tengah 2016.pdf'
        ],
        'Kecamatan Malaka Barat': [
            'pdf_files/Kecamatan Malaka Barat.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Barat 2011.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Barat 2012.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Barat 2013.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Barat 2014.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Barat 2015.pdf',
            'pdf_files/Statistik Daerah Kecamatan Malaka Barat 2016.pdf'
        ],
        'Kecamatan Wewiku': [
            'pdf_files/Kecamatan Wewiku.pdf',
            'pdf_files/Statistik Daerah Kecamatan Wewiku 2011.pdf',
            'pdf_files/Statistik Daerah Kecamatan Wewiku 2012.pdf',
            'pdf_files/Statistik Daerah Kecamatan Wewiku 2013.pdf',
            'pdf_files/Statistik Daerah Kecamatan Wewiku 2014.pdf',
            'pdf_files/Statistik Daerah Kecamatan Wewiku 2015.pdf',
            'pdf_files/Statistik Daerah Kecamatan Wewiku 2016.pdf'
        ]
    };

    const documentUrlsForKecamatan = documentUrls[provinsi];
    if (documentUrlsForKecamatan) {
        const documentList = documentUrlsForKecamatan.map(documentUrl => {
            return `<a href="${documentUrl}" target="_blank">${documentUrl.split('/').pop()}</a><br>`;
        }).join('');

        const documentContainer = document.createElement('div');
        documentContainer.innerHTML = documentList;

        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';
        searchResults.appendChild(documentContainer);
    } else {
        alert('Dokumen tidak tersedia untuk provinsi ini.');
    }
}
