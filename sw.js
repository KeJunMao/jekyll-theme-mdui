---
layout: compress
---
var cacheName = 'madhur-cache-v1';
var filesToCache = [
    'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js',
    'https://cdn.bootcss.com/mdui/0.2.1/js/mdui.min.js',
    'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js',
    'https://cdn.bootcss.com/jquery_lazyload/1.9.7/jquery.lazyload.min.js',
    'https://cdn.bootcss.com/mdui/0.2.1/css/mdui.min.css',
    'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css',

    {% for page in site.pages %}
        {% if page.url contains 'projects' or page.url contains '404'   %}
            
        {% else %}
            '{{ page.url }}',
        {% endif %}
        
    {% endfor %}

    {% for post in site.posts %}
        '{{ post.url }}',
    {% endfor %}

    {% for file in site.static_files %}
        '{{ file.path }}',
    {% endfor %}
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.log('[*] Serving cached: ' + event.request.url);
                    return response;
                }

                console.log('[*] Fetching: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );
});