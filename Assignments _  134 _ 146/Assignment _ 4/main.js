let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// 1. https?:\/\/ -> matches "http://" or "https://"
// 2. (?:[-\w]+\.)? -> optional subdomain like "www." or "sub."
// 3. ([-\w]+) -> matches the main domain name (capturing group)
// 4. \.\w+ -> matches top-level domain like ".com" or ".org"
// 5. (?::\.\w+)? -> optional port or secondary extension
// 6. \/? shower .* -> matches optional slash and any remaining path/text
// 7. i -> case-insensitive flag