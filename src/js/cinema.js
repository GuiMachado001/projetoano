        // Carrossel 1: Direção para a direita e com uma velocidade mais rápida
        const swiper1 = new Swiper('#carousel1', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                disableOnInteraction: false, // O autoplay não será desativado após a interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais rápida)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção para a direita
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        // Carrossel 2: Direção para a esquerda e com uma velocidade mais lenta
        const swiper2 = new Swiper('#carousel2', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                reverseDirection: true, // Faz o autoplay girar para a direita
                disableOnInteraction: false, // O autoplay não será desativado após interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais lenta)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção horizontal
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });
        

        const swiper3 = new Swiper('#carousel3', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                disableOnInteraction: false, // O autoplay não será desativado após a interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais lenta)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção para a esquerda
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        const swiper4 = new Swiper('#carousel4', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                reverseDirection: true,
                disableOnInteraction: false, // O autoplay não será desativado após a interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais lenta)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção para a esquerda
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        const swiper5 = new Swiper('#carousel5', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                disableOnInteraction: false, // O autoplay não será desativado após a interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais lenta)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção para a esquerda
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });


        const swiper6 = new Swiper('#carousel6', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                reverseDirection: true,
                disableOnInteraction: false, // O autoplay não será desativado após a interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais lenta)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção para a esquerda
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        const swiper7 = new Swiper('#carousel7', {
            loop: true, // Habilita o loop infinito
            slidesPerView: 3, // Exibe 3 imagens ao mesmo tempo
            spaceBetween: 5, // Reduz o espaço entre as imagens
            autoplay: {
                delay: 0, // Sem delay, rotação contínua
                disableOnInteraction: false, // O autoplay não será desativado após a interação
            },
            speed: 5000, // Velocidade da transição entre os slides (mais lenta)
            slidesPerGroup: 1, // Faz com que cada slide seja exibido um por vez
            effect: 'slide', // Efeito de transição suave
            direction: 'horizontal', // Direção para a esquerda
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });


        // Forçar o Swiper a não dar "pause" (importante para a continuidade sem interrupção)
        swiper1.on('slideChangeTransitionEnd', function() {
            swiper1.autoplay.start();
        });

        swiper2.on('slideChangeTransitionEnd', function() {
            swiper2.autoplay.start();
        });
