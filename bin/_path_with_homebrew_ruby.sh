# Prefer a real Ruby install over stale or broken asdf shims (common when
# Homebrew moved from /usr/local to /opt/homebrew or asdf was removed).
_prepend_homebrew_ruby_to_path() {
  local dir
  for dir in /opt/homebrew/opt/ruby/bin /usr/local/opt/ruby/bin; do
    if [[ -x "${dir}/ruby" ]]; then
      PATH="${dir}:${PATH}"
      export PATH
      return 0
    fi
  done
  return 1
}

_prepend_homebrew_ruby_to_path
