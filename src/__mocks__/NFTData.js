const defaultNFTData = [
    {
        id: 0,
        level_car: 'WIND',
        name_car: 'Common',
        thumbnail: '/home/nft/common.webp',
        image: '/home/nft/common.png',
        description:
            'All players can claim Wind model. This model allows easy racing in normal weather.',
        number_editions: 'Claim freely',
        color: {
            text: '#000000',
            background: '#03aa14',
        },
        properties: [
            {
                name: 'Speed',
                value: 5,
                icon: {
                    image: '/home/nft/icon/speed.svg',
                    with: '3.4rem',
                    height: '3.4rem',
                },
                className: 'speed',
            },
            {
                name: 'Acceleration',
                value: 5,
                icon: {
                    image: '/home/nft/icon/acceleration.svg',
                    with: '3.3rem',
                    height: '3.8rem',
                },
                className: 'acceleration',
            },
            {
                name: 'Handling',
                value: 5,
                icon: {
                    image: '/home/nft/icon/handling.svg',
                    with: '3.3rem',
                    height: '3.3rem',
                },
                className: 'handling',
            },
            {
                name: 'Durability',
                value: 5,
                icon: {
                    image: '/home/nft/icon/durability.svg',
                    with: '3.1rem',
                    height: '3.1rem',
                },
                className: 'durability',
            },
        ],
    },
    {
        id: 1,
        level_car: 'STORM',
        name_car: 'Uncommon',
        thumbnail: '/home/nft/uncommon.webp',
        image: '/home/nft/uncommon.png',
        description:
            'Storm model is great handling and durability that make a great choice for rainy/stormy/snowy weather condition',
        number_editions: 5000,
        color: {
            text: '#000000',
            background: '#c3fb12',
        },
        properties: [
            {
                name: 'Speed',
                value: 6.5,
                icon: {
                    image: '/home/nft/icon/speed.svg',
                    with: '3.4rem',
                    height: '3.4rem',
                },
                className: 'speed',
            },
            {
                name: 'Acceleration',
                value: 6,
                icon: {
                    image: '/home/nft/icon/acceleration.svg',
                    with: '3.3rem',
                    height: '3.8rem',
                },
                className: 'acceleration',
            },
            {
                name: 'Handling',
                value: 8,
                icon: {
                    image: '/home/nft/icon/handling.svg',
                    with: '3.3rem',
                    height: '3.3rem',
                },
                className: 'handling',
            },
            {
                name: 'Durability',
                value: 8,
                icon: {
                    image: '/home/nft/icon/durability.svg',
                    with: '3.1rem',
                    height: '3.1rem',
                },
                className: 'durability',
            },
        ],
    },
    {
        id: 2,
        level_car: 'TORNADO',
        name_car: 'Rare',
        thumbnail: '/home/nft/rare.webp',
        image: '/home/nft/rare.png',
        description:
            'Tornado model balanced acceleration and handling make it a great choice for off-road races on extreme weather conditions.',
        number_editions: 2500,
        color: {
            text: '#ffffff',
            background: '#00aed6',
        },
        properties: [
            {
                name: 'Speed',
                value: 7,
                icon: {
                    image: '/home/nft/icon/speed.svg',
                    with: '3.4rem',
                    height: '3.4rem',
                },
                className: 'speed',
            },
            {
                name: 'Acceleration',
                value: 8,
                icon: {
                    image: '/home/nft/icon/acceleration.svg',
                    with: '3.3rem',
                    height: '3.8rem',
                },
                className: 'acceleration',
            },
            {
                name: 'Handling',
                value: 7.8,
                icon: {
                    image: '/home/nft/icon/handling.svg',
                    with: '3.3rem',
                    height: '3.3rem',
                },
                className: 'handling',
            },
            {
                name: 'Durability',
                value: 6,
                icon: {
                    image: '/home/nft/icon/durability.svg',
                    with: '3.1rem',
                    height: '3.1rem',
                },
                className: 'durability',
            },
        ],
    },
    {
        id: 3,
        level_car: 'TSUNAMI',
        name_car: 'Epic',
        thumbnail: '/home/nft/legendary.webp',
        image: '/home/nft/big-legendary.webp',
        description:
            "It's great grip and handling make it an ideal car for races with sharp curves and hard turns.",
        video: 'https://youtu.be/QjIPH3WxYBw',
        number_editions: 1000,
        color: {
            text: '#ffffff',
            background: '#ffab00',
        },
        properties: [
            {
                name: 'Speed',
                value: 7.6,
                icon: {
                    image: '/home/nft/icon/speed.svg',
                    with: '3.4rem',
                    height: '3.4rem',
                },
                className: 'speed',
            },
            {
                name: 'Acceleration',
                value: 7.1,
                icon: {
                    image: '/home/nft/icon/acceleration.svg',
                    with: '3.3rem',
                    height: '3.8rem',
                },
                className: 'acceleration',
            },
            {
                name: 'Handling',
                value: 7.7,
                icon: {
                    image: '/home/nft/icon/handling.svg',
                    with: '3.3rem',
                    height: '3.3rem',
                },
                className: 'handling',
            },
            {
                name: 'Durability',
                value: 8,
                icon: {
                    image: '/home/nft/icon/durability.svg',
                    with: '3.1rem',
                    height: '3.1rem',
                },
                className: 'durability',
            },
        ],
    },
    {
        id: 4,
        level_car: 'FLASH',
        name_car: 'Legendary',
        thumbnail: '/home/nft/epic.png',
        image: '/home/nft/big-epic.png',
        description:
            'It allows to reach the highest speeds in straight lines, and its versatile design gives the car perfect handling to smoothly take hard curves and sharp turns.',
        video: 'https://youtu.be/L2qkhbx_giM',
        number_editions: 2000,
        color: {
            text: '#ffffff',
            background: '#df1895',
        },
        properties: [
            {
                name: 'Speed',
                value: 8.9,
                icon: {
                    image: '/home/nft/icon/speed.svg',
                    with: '3.4rem',
                    height: '3.4rem',
                },
                className: 'speed',
            },
            {
                name: 'Acceleration',
                value: 8.9,
                icon: {
                    image: '/home/nft/icon/acceleration.svg',
                    with: '3.3rem',
                    height: '3.8rem',
                },
                className: 'acceleration',
            },
            {
                name: 'Handling',
                value: 7.9,
                icon: {
                    image: '/home/nft/icon/handling.svg',
                    with: '3.3rem',
                    height: '3.3rem',
                },
                className: 'handling',
            },
            {
                name: 'Durability',
                value: 7.9,
                icon: {
                    image: '/home/nft/icon/durability.svg',
                    with: '3.1rem',
                    height: '3.1rem',
                },
                className: 'durability',
            },
        ],
    },
    {
        id: 5,
        level_car: 'LIGHTNING',
        name_car: 'Mythical',
        thumbnail: '/home/nft/mythical.webp',
        image: '/home/nft/mythical.png',
        description:
            'Its great acceleration and max speed make it an ideal vehicle for drag racing. Its performance improves in dry tracks and arid climates.',
        number_editions: 200,
        color: {
            text: '#ffffff',
            background: '#ee2737',
        },
        properties: [
            {
                name: 'Speed',
                value: 9.4,
                icon: {
                    image: '/home/nft/icon/speed.svg',
                    with: '3.4rem',
                    height: '3.4rem',
                },
                className: 'speed',
            },
            {
                name: 'Acceleration',
                value: 9.2,
                icon: {
                    image: '/home/nft/icon/acceleration.svg',
                    with: '3.3rem',
                    height: '3.8rem',
                },
                className: 'acceleration',
            },
            {
                name: 'Handling',
                value: 8.7,
                icon: {
                    image: '/home/nft/icon/handling.svg',
                    with: '3.3rem',
                    height: '3.3rem',
                },
                className: 'handling',
            },
            {
                name: 'Durability',
                value: 8,
                icon: {
                    image: '/home/nft/icon/durability.svg',
                    with: '3.1rem',
                    height: '3.1rem',
                },
                className: 'durability',
            },
        ],
    },
]

export default defaultNFTData
