function ChatSteps(){
    const steps = [
        {
            id: '1',
            message: 'Merhaba, hoşgeldiniz isminiz nedir?',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Merhaba, {previousValue}, hangi ürün tipleri ile ilgileniyorsunuz? ',
            trigger: '4'
        },
        {
            id: '4',
            options: [
                { value: 1, label: 'Kadın', trigger: '5' },
                { value: 2, label: 'Erkek', trigger: '8' },
                { value: 3, label: 'Çocuk', trigger: '10' },
                { value: 'login', label: 'Yardım', trigger: '12' },
            ]
        },
        {
            id:'5',
            message: 'Lütfen Kadin tipine ait bir kategori seçiniz',
            trigger: "6"
        },
        {
            id: "6",
            options: [
                { value: 'woman', label: 'Tüm Ürünler', trigger: '7' },
                { value: 'woman-ust-giyim', label: 'Üst Giyim', trigger: '7' },
                { value: 'woman-dis-giyim', label: 'Dış Giyim', trigger: '7' },
                { value: 'woman-ceket-kaban', label: 'Ceket & Kaban', trigger: '7' },
                { value: 'woman-hırka-kazak', label: 'Hırka & Kazak', trigger: '7' },
                { value: 'login', label: 'Yardım', trigger: '12' },
            ]
        },
        {
            id: '7',
            message: 'Seçtiğiniz sayfaya yönlendiriliyorsunuz ... ',
            end: true
        },
        {
            id:'8',
            message: 'Lütfen Erkek tipine ait bir kategori seçiniz',
            trigger: "9"
        },
        {
            id: "9",
        
            message: 'kadin',
        },
        {
            id:'10',
            message: 'Lütfen Çocuk tipine ait bir kategori seçiniz',
            trigger: "11"
        },
        {
            id: "11",
            message: 'kadin',
        },
        {
            id:'12',
            message: 'Yardım sayfasına yönlendiriliyorsunuz ... ',
            end: true
        },
    ];

    return steps
}


export default ChatSteps