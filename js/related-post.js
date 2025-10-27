// related-post.js
fetch('/data/faqCategory.json')
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return response.json();
	})
	.then((faqData) => {
	

		const currentPath = window.location.pathname;
		const splitPath = currentPath.split('/');
		const targetSegment = splitPath[2];
		const slug = splitPath[splitPath.length - 1];

	

		if (targetSegment) {
		
			const matchedCategory = faqData.find(
				(data) => data.category === targetSegment,
			);

			if (matchedCategory) {
			

				const relatedPostContainer = document.querySelector('#related-posts');

				matchedCategory.urls.forEach((url) => {
				
					// If the URL includes the slug

					if (url.includes(slug)) {
						
						return;
					}

					// Create the <li> and <a> elements dynamically

					const listItem = document.createElement('li');
					const anchorTag = document.createElement('a');

					//remove the current slug and .html file from the path

					const basePath = currentPath.substring(
						0,
						currentPath.lastIndexOf('/') + 1,
					);

					// Ensure basePath does not have a trailing slash and concatenate with the URL
					const formattedBasePath = basePath.endsWith('/')
						? basePath.slice(0, -1)
						: basePath;

					// Construct the full href correctly, making sure no double slashes appear
					let href = `${formattedBasePath}${url}`;

					// Ensure there's no extra slash
					href = href.replace(/\/\//g, '/'); // Replace any double slashes with a single one

					anchorTag.href = href;

					// Extract the slug from the URL and use it as the text description

					let urlSlug = url
						.split('/') // Split the URL into parts
						.pop() // Get the last part of the URL (e.g., "how-to-deposit.html")
						.replace(/\.html$/, '') // Remove the ".html" extension
						.split('-') // Split the remaining string by hyphens
						.join(' '); // Join the parts with spaces

					urlSlug = `${urlSlug.charAt(0).toUpperCase()}${urlSlug.slice(1)}`;



					const questionCues = [
						'What',
						'When',
						'How',
						'Who',
						'Is',
						'Are',
						'Can',
					];
					const firstWord = urlSlug.split(' ')[0];

					if (questionCues.includes(firstWord)) {
						urlSlug = `${urlSlug}?`; // Add a "?" to the end if it's a question word
					} else {
						urlSlug = urlSlug
							.split(' ') // Split into words
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
							.join(' '); // Join them back together
                    }
                    
                    urlSlug = urlSlug.replace(/panalobet/gi, 'Panalobet');
                    urlSlug = urlSlug.replace(/\b(i)\b/g, 'I');
					anchorTag.textContent = `${urlSlug}`;

					// Append the <a> to the <li>, and the <li> to the related-post container

					listItem.appendChild(anchorTag);
					relatedPostContainer.appendChild(listItem);
				});
			} else {
				console.log('No matching category');
			}
		}
	})
	.catch((error) => {
		console.error('Error fetching JSON:', error);
	});
