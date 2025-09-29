const nsfwCategory = [
  '901',
  '902',
  '903',
  '904',
  '905',
  '906',
  '907',
  '908',
  '910',
  '911',
  '912'
];

function enableBlurNsfw() {
  const path = window.location.pathname;

  if (
    path === '/' ||
    path === '/index.php' ||
    path === '/viewno18sb.php' ||
    path === '/viewno18sbx.php' ||
    path === '/viewbrsb.php'
  ) {
    const screenshots = document.querySelectorAll(
      '[bearbit-screenshot="preview"]:not([bearbit-nsfw="checked"])'
    );

    if (screenshots) {
      screenshots.forEach(td => {
        const row = td.parentNode;
        if (row) {
          // get category id
          const category = row.querySelector('td > a') as HTMLLinkElement;
          let categoryId = '';
          if (category) {
            const categoryUrl = category.href.split('?').pop() ?? '';
            const categoryParams = new URLSearchParams(categoryUrl);
            categoryId = categoryParams.get('cat') ?? '';
          }
          // blur nsfw
          if (nsfwCategory.indexOf(categoryId) !== -1) {
            const img = td.firstElementChild;
            if (img) {
              (img as HTMLImageElement).style.filter = 'blur(5px)';
            }
          }
        }
        td.setAttribute('bearbit-nsfw', 'checked');
      });
    }
  }
}

function disableBlurNsfw() {
  const path = window.location.pathname;

  if (
    path === '/' ||
    path === '/index.php' ||
    path === '/viewno18sb.php' ||
    path === '/viewno18sbx.php' ||
    path === '/viewbrsb.php'
  ) {
    const screenshots = document.querySelectorAll(
      '[bearbit-screenshot="preview"] > img'
    );

    if (screenshots) {
      screenshots.forEach(img => {
        const td = img.parentNode as HTMLElement;
        const row = td.parentNode;
        
        // Check category id - try multiple selectors
        let categoryId = '';
        if (row) {
          // Try different ways to find the category link
          let category = row.querySelector('td > a') as HTMLAnchorElement;
          
          // If not found, try to find any link with cat parameter
          if (!category) {
            const allLinks = row.querySelectorAll('a');
            for (const link of allLinks) {
              if ((link as HTMLAnchorElement).href.includes('cat=')) {
                category = link as HTMLAnchorElement;
                break;
              }
            }
          }
          
          if (category) {
            const categoryUrl = category.href;
            // Parse URL to get cat parameter
            try {
              const url = new URL(categoryUrl);
              categoryId = url.searchParams.get('cat') ?? '';
              
              // Fallback: try parsing from href string
              if (!categoryId && categoryUrl.includes('cat=')) {
                const match = categoryUrl.match(/cat=(\d+)/);
                if (match) {
                  categoryId = match[1];
                }
              }
            } catch (e) {
              // Fallback parsing if URL constructor fails
              if (categoryUrl.includes('cat=')) {
                const match = categoryUrl.match(/cat=(\d+)/);
                if (match) {
                  categoryId = match[1];
                }
              }
            }
          }
        }
        
        //console.log('Category ID:', categoryId); // Debug log
        
        // Keep blur for cat=908, remove blur for others
        if (categoryId !== '908') {
          const styles = window.getComputedStyle(img);
          if (styles.getPropertyValue('filter')) {
            (img as HTMLImageElement).style.removeProperty('filter');
          }
          td.removeAttribute('bearbit-nsfw');
        } else {
          console.log('Keeping blur for category 908'); // Debug log
          // Ensure blur is applied for category 908
          (img as HTMLImageElement).style.filter = 'blur(5px)';
          td.setAttribute('bearbit-nsfw', 'checked');
        }
      });
    }
  }
}

export { enableBlurNsfw, disableBlurNsfw };
