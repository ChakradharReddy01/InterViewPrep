// Interview A-Z - Interactive utilities & Accordion Navigation

document.addEventListener('DOMContentLoaded', () => {
  // Search and Filtering on index.html
  const searchInput = document.getElementById('topic-search');
  const cards = document.querySelectorAll('.card');
  const tagButtons = document.querySelectorAll('.tag-btn');
  let activeTag = 'all';

  function filterTopics() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    cards.forEach(card => {
      const title = card.querySelector('.card-title')?.innerText.toLowerCase() || '';
      const desc = card.querySelector('.card-desc')?.innerText.toLowerCase() || '';
      const subtopics = card.querySelector('.subtopics-list')?.innerText.toLowerCase() || '';
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();

      const matchesQuery = !query || title.includes(query) || desc.includes(query) || subtopics.includes(query) || tags.includes(query);
      const matchesTag = activeTag === 'all' || tags.includes(activeTag.toLowerCase());

      if (matchesQuery && matchesTag) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Update section visibility if all cards in a group are hidden
    document.querySelectorAll('.topic-group-section').forEach(section => {
      const visibleCards = section.querySelectorAll('.card:not([style*="display: none"])');
      section.style.display = visibleCards.length > 0 ? 'block' : 'none';
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterTopics);
  }

  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tagButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTag = btn.getAttribute('data-filter') || 'all';
      filterTopics();
    });
  });

  // Accordion Toggle for Left Navigation Sidebar
  const moduleHeaders = document.querySelectorAll('.module-tree-header');
  moduleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.closest('.module-tree-item');
      if (parentItem) {
        // Toggle current item
        const isCurrentlyExpanded = parentItem.classList.contains('expanded');
        
        // Optional: Close other modules if you want strict single accordion:
        // document.querySelectorAll('.module-tree-item').forEach(item => item.classList.remove('expanded'));
        
        if (isCurrentlyExpanded) {
          parentItem.classList.remove('expanded');
        } else {
          parentItem.classList.add('expanded');
        }
      }
    });
  });

  // Mobile Sidebar Toggle Drawer
  const mobileToggleBtn = document.getElementById('mobile-sidebar-toggle');
  const homeSidebar = document.querySelector('.home-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (mobileToggleBtn && homeSidebar) {
    mobileToggleBtn.addEventListener('click', () => {
      homeSidebar.classList.toggle('active');
      if (backdrop) backdrop.classList.toggle('active');
    });
  }

  if (backdrop && homeSidebar) {
    backdrop.addEventListener('click', () => {
      homeSidebar.classList.remove('active');
      backdrop.classList.remove('active');
    });
  }

  // Auto-expand module if hash matches on page load
  if (window.location.hash) {
    const targetModule = document.querySelector(window.location.hash);
    if (targetModule) {
      const moduleId = window.location.hash.replace('#', '');
      const correspondingTreeItem = document.querySelector(`[data-module-target="${moduleId}"]`);
      if (correspondingTreeItem) {
        correspondingTreeItem.classList.add('expanded');
      }
    }
  }

  // Dynamic Table of Contents for Detail Pages
  const articleContent = document.querySelector('.article-content');
  const tocList = document.getElementById('dynamic-toc');

  if (articleContent && tocList) {
    const headings = articleContent.querySelectorAll('h2, h3');
    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = 'section-' + (index + 1);
      }
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.textContent = heading.textContent;
      if (heading.tagName.toLowerCase() === 'h3') {
        li.style.paddingLeft = '1rem';
        li.style.fontSize = '0.82rem';
      }
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  // Add Copy Button to Code Blocks
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'Copy';
    button.style.position = 'absolute';
    button.style.top = '0.5rem';
    button.style.right = '0.5rem';
    button.style.padding = '0.2rem 0.5rem';
    button.style.fontSize = '0.75rem';
    button.style.background = '#334155';
    button.style.color = '#e2e8f0';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        button.style.background = '#10b981';
        setTimeout(() => {
          button.textContent = 'Copy';
          button.style.background = '#334155';
        }, 2000);
      });
    });

    pre.appendChild(button);
  });
});
