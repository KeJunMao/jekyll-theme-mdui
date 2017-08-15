---
layout: compress
---
var CACHE_NAME = 'madhur-cache-v1';
var urlsToCache = [
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
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(urlsToCache);
  }).catch(function(err) {
    console.log('Cache add error: ', err);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch(function() {
      return caches.match('/offline.html');
    })
  );
});