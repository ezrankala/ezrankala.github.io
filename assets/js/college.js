document.addEventListener('DOMContentLoaded', () => {
    // Unified collapsible functionality
    document.querySelectorAll('.collapsible-trigger, .resource-card-trigger').forEach(trigger => {
        trigger.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = parent.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });

    // Close all collapsibles when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.collapsible, .resource-card')) {
            document.querySelectorAll('.collapsible, .resource-card').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.collapsible-trigger, .resource-card-trigger').setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.collapsible, .resource-card').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.collapsible-trigger, .resource-card-trigger').setAttribute('aria-expanded', 'false');
            });
        }
    });
});