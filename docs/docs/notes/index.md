# Notes!

## common tricks and tips
### 1. manually change the image url when move to another folder
=== "Problem"
    In this example, I moved the images from `/` to `/cache` folder, now I need to update all images url in `md`
    
    for example: `![image](image.jpg)` to `![image](cache/image.jpg)`
        
    use built-in `find` and `replace` feature in vscode to do this.
=== "Solution"
    using regex expression

        - find: (!\[.*?\]\()\s*(?!cache)([^)]+)\)

        - replace: $1cache/$2)

=== "Explanation"
    - `(!\[.*?\]\()` matches the image tag
    - `\s*` matches any whitespace after the image tag
    - `(?!cache)` is a negative lookahead that ensures the path does not already contain `cache`
    - `([^)]+)` captures the rest of the path until the closing parenthesis
        - `[^\)]` matches any character that is not a closing parenthesis `)`
    - `$1cache/$2)` replaces it with the captured image tag and adds `cache/` before the rest of the path
