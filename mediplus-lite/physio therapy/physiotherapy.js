document.addEventListener('DOMContentLoaded', () => {
    const therapies = [
        {
            type: 'Massage Therapy',
            description: 'Relieves pain, reduces stress, and improves circulation. Ideal for elderly with muscle tension.',
            imgSrc: 'images/Massage.jpeg',
            moreInfo: 'To perform a massage therapy session, start by setting up a calm and comfortable environment, using a suitable massage table or chair. Ensure your hands are clean, and apply massage oil or lotion to reduce friction. Begin with gentle strokes to warm up the muscles and increase blood flow, gradually incorporating techniques like kneading, circular motions, and light pressure to target tense areas. Always adjust the pressure according to the clients comfort level. Conclude the session with lighter strokes to relax the muscles and help the client transition smoothly back into their regular state. Its important to have proper training and certification, especially when working with elderly clients who may have specific health needs'},
        {
            type: 'Aquatic Therapy',
            description: 'Uses water to aid movement. Effective for arthritis, joint pain, and improving balance.',
            imgSrc: 'images/aqua.jpeg',
            moreInfo: 'Aquatic therapy uses the properties of water to aid movement, making it particularly effective for managing arthritis, joint pain, and improving balance. The buoyancy of water reduces joint impact while providing resistance to strengthen muscles. To perform aquatic therapy, start by using a heated pool with a comfortable water temperature between 80-90°F (27-32°C). Begin with an assessment of the individuals abilities, consulting a healthcare provider if necessary. Warm up with gentle water exercises to gradually increase heart rate, then perform a variety of activities like walking, leg lifts, and stretches, using water resistance to enhance muscle strength and flexibility. Balance training exercises, such as standing on one leg or using flotation devices, should also be included. Cool down with slow, gentle movements and stretches to relax muscles and prevent stiffness. Tailored exercises and proper supervision are essential, especially considering the individuals health conditions and capabilities.'},
        
        {
            type: 'Stretching Exercises',
            description: 'Promotes flexibility and mobility. Perfect for maintaining muscle tone in elderly individuals.',
            imgSrc: 'images/strech.jpeg',
            moreInfo: 'Stretching exercises are essential for enhancing flexibility and mobility, making them ideal for maintaining muscle tone and joint function in elderly individuals. Regular stretching helps prevent stiffness, improves range of motion, and supports overall physical well-being. Begin with a gentle warm-up, such as walking or light movement, to prepare the muscles and reduce the risk of injury. Choose simple stretches targeting major muscle groups like the neck, shoulders, arms, legs, and back, including seated hamstring stretches, shoulder rolls, and calf stretches. Hold each stretch for 15-30 seconds, ensuring a gentle pull without pain, and repeat 2-3 times per stretch. Encourage deep, relaxed breathing throughout the routine to enhance relaxation and effectiveness. Conclude with a cool-down of light stretching or slow movements to relax muscles and prevent stiffness. Always adapt exercises to the individuals flexibility and comfort levels, consulting with a healthcare provider if there are any concerns or limitations.'},
        {
            type: 'Electrotherapy',
            description: 'Helps reduce pain and inflammation with electrical stimulation. Commonly used for joint pain.',
            imgSrc: 'images/electr.jpeg',
            moreInfo: 'Electrotherapy is a treatment that utilizes electrical stimulation to reduce pain and inflammation, making it particularly effective for managing joint pain by promoting healing through controlled electrical currents. To perform electrotherapy, begin by setting up a clean and comfortable space and using an electrotherapy device like a TENS (Transcutaneous Electrical Nerve Stimulation) unit. Clean and prepare the skin where the electrodes will be placed, then attach the electrodes around the area of pain or inflammation according to the devices instructions. Adjust the device settings for intensity and duration, starting at lower levels and increasing as needed. Allow the device to deliver electrical impulses for 15-30 minutes before turning it off, removing the electrodes, and cleaning the skin. It is important to follow the device instructions carefully and consult a healthcare provider for personalized guidance to ensure safe and effective treatment.'},







     
        {
            type: 'Manual Therapy',
            description: 'Involves hands-on',
            description: 'Involves hands-on techniques to improve movement and relieve pain. Effective for joint and soft tissue problems.',
            imgSrc: 'images/manual.jpeg',
            moreInfo: 'Manual therapy involves hands-on techniques to enhance movement and alleviate pain, making it particularly effective for addressing joint and soft tissue problems. It aims to improve flexibility, reduce stiffness, and relieve discomfort through physical manipulation. To perform manual therapy, start by assessing the individual condition and identifying areas of pain or restricted movement. Set up a comfortable and safe environment for both the therapist and the client. The therapy may include joint mobilization, where the joint is gently moved within its range to improve mobility, and joint manipulation, involving controlled, quick adjustments to restore function and relieve pain. Soft tissue techniques, such as massage and pressure, are also used to relax muscles and release tension. Throughout the session, monitor the client’s comfort and adjust techniques as necessary. After the session, provide recommendations for stretches or exercises to support ongoing improvement and help prevent future issues.'},



        {
            type: 'Balance Training',
            description: 'Focuses on improving stability and coordination. Crucial for preventing falls and enhancing mobility.',
            imgSrc: 'images/balance.jpeg',
            moreInfo: 'Balance training focuses on enhancing stability and coordination, essential for preventing falls and improving overall mobility. These exercises strengthen the body’s ability to maintain equilibrium and navigate various surfaces safely. Begin by assessing the individual’s current balance and mobility to tailor exercises to their needs. Create a safe environment with sturdy support, like a chair or wall, to prevent falls. Exercises may include static balance, such as standing on one leg or performing gentle balance poses with support if needed, and dynamic balance activities like walking heel-to-toe, stepping over obstacles, or using a balance board. Coordination drills, such as reaching or tossing a ball while balancing, can also be incorporated to challenge stability further. Start with simple exercises and gradually increase the difficulty as balance improves. Conclude with stretching or gentle movements to relax muscles and maintain flexibility. Ensure exercises are appropriate for the individual’s fitness level, and consult a healthcare professional if there are any concerns or pre-existing conditions.',
        },
        {
            type: 'Heat and Cold Therapy',
            description: 'Uses heat and cold applications to manage pain and inflammation. Suitable for acute and chronic conditions.',
            imgSrc: 'images/heat.jpeg',
            moreInfo: 'Heat and cold therapy are effective techniques for managing pain and inflammation. Heat therapy helps relax muscles and increases blood flow, making it ideal for chronic conditions, while cold therapy reduces swelling and numbs the area, making it perfect for acute injuries. For heat therapy, use a heating pad, warm towel, or hot water bottle, ensuring it is not too hot to avoid burns. Apply the heat source to the affected area for 15-20 minutes, using a barrier like a towel to protect the skin, and repeat as needed throughout the day. For cold therapy, use an ice pack, frozen gel pack, or cold compress wrapped in a cloth to prevent direct skin contact. Apply to the affected area for 15-20 minutes, but avoid prolonged use to prevent frostbite. Cold therapy is most beneficial in the first 48 hours after an injury and can be used several times daily. It is often helpful to alternate between heat and cold therapy depending on the condition and stage of healing. Always follow safety guidelines, avoid these therapies if there are skin or circulatory issues without professional advice, and consult a healthcare provider if uncertain about their use'},
     
        {
            type: 'Yoga for Flexibility',
            description: 'Yoga poses designed to enhance flexibility and ease joint stiffness. Ideal for elderly individuals.',
            imgSrc: 'images/yoga2.jpeg',
            moreInfo: 'Learn about yoga poses that improve flexibility and joint health.',
        },
        {
            type: 'Yoga for Balance',
            description: 'Yoga practices aimed at improving balance and stability. Helps reduce the risk of falls.',
            imgSrc: 'images/yogaa3.jpeg',
            moreInfo: 'Discover yoga practices that enhance balance and prevent falls.',
        },
        {
            type: 'Strength Training',
            description: 'Exercises focused on building muscle strength. Important for maintaining overall health and mobility.',
            imgSrc: 'images/strength.jpeg',
            moreInfo: 'Find out how strength training can help elderly individuals maintain muscle mass and strength.',
        },
        {
            type: 'Joint Mobilization',
            description: 'Techniques to improve joint movement and reduce pain. Effective for conditions like arthritis.',
            imgSrc: 'images/join.jpeg',
            moreInfo: 'Watch joint mobilization techniques that help improve movement and alleviate pain.',
        },
        {
            type: 'Posture Correction',
            description: 'Exercises and techniques to correct posture and reduce back pain. Beneficial for elderly with poor posture.',
            imgSrc: 'images/posture.gif',
            moreInfo: 'Learn how posture correction exercises can alleviate back pain and improve overall posture.',
        },
        {
            type: 'Breathing Exercises',
            description: 'Techniques to improve lung capacity and respiratory health. Useful for managing breathlessness.',
            imgSrc: 'images/brea.jpeg',

            moreInfo: 'Explore breathing exercises that enhance respiratory health and manage breathlessness.',
        },
        {
            type: 'Gait Training',
            description: 'Therapies aimed at improving walking patterns and stability. Essential for elderly with mobility issues.',
            imgSrc: 'images/gait.jpeg',
            moreInfo: 'Discover gait training techniques that improve walking patterns and stability.',
        }
    ];

    const therapyContainer = document.getElementById('therapy-types');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    therapies.forEach(therapy => {
        const card = document.createElement('div');
        card.classList.add('therapy-card');

        if (therapy.videoSrc) {
            card.innerHTML = `
                <video controls>
                    <source src="${therapy.videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <h2>${therapy.type}</h2>
                <p>${therapy.description}</p>
                <button data-info="${therapy.moreInfo}">Learn More</button>
            `;
        } else {
            card.innerHTML = `
                <img src="${therapy.imgSrc}" alt="${therapy.type}">
                <h2>${therapy.type}</h2>
                <p>${therapy.description}</p>
                <button data-info="${therapy.moreInfo}">Learn More</button>
            `;
        }

        therapyContainer.appendChild(card);
    });

    document.getElementById('search-bar').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.therapy-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    document.querySelectorAll('.therapy-card button').forEach(button => {
        button.addEventListener('click', () => {
            const info = button.getAttribute('data-info');
            modalTitle.textContent = button.parentElement.querySelector('h2').textContent;
            modalDescription.textContent = info;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
