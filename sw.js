---
layout: null
---
var CACHE = 'cache-and-update';

var urlsToCache = [
  {% for page in site.pages %}
    {% if page.url contains 'projects' or page.url contains '404' %}
       
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

self.addEventListener('install', function(evt) {
  evt.waitUntil(caches.open(CACHE).then(function(cache) {
    cache.addAll(urlsToCache);
  }));
});

self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});

function fromCache(request) {
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(response) {
      if (response != undefined) {
        return response;
      } else {
        return fetchFromInternet(request);
      }
    });
  }).catch(function() {
    return caches.match('/offline.html');
  });
}

function update(request) {
  return caches.open(CACHE).then(function(cache) {
    return fetchFromInternet(request);
  });
}

function fetchFromInternet(request) {
  var fetchRequset = request.clone();
  return fetch(fetchRequset).then(function(response) {
    if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
    }
    var responseToCache = response.clone();
    caches.open(CACHE).then(function(cache) {
      cache.put(request, responseToCache);
    });
    return response;
  });
}
