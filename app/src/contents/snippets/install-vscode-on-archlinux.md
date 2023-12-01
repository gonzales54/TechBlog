---
title: "Arch LinuxにVSCodeをインストールする方法"
createdAt: 2023/03/14
readingTime: 4
publish: true
type: "snippets"
---
# Arch LinuxにVSCodeをインストールする方法

```bash
git clone https://AUR.archlinux.org/visual-studio-code-bin.git
cd visual-studio-code-bin/
makepkg -s
sudo pacman -U visual-studio-code-bin-*.pkg.tar.zst
```