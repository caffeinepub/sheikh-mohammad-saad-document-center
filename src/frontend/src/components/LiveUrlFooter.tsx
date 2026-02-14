import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Displays the current site origin with a copy-to-clipboard button.
 * Shows success confirmation after copying.
 */
export function LiveUrlFooter() {
  const [copied, setCopied] = useState(false);
  const liveUrl = window.location.origin;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-4 px-4 bg-muted/50 rounded-lg border border-border">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span className="text-sm font-medium text-foreground">Live URL:</span>
        <code className="text-sm text-muted-foreground bg-background px-3 py-1 rounded border border-border break-all">
          {liveUrl}
        </code>
      </div>
      <Button
        onClick={handleCopy}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 min-w-[100px]"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy
          </>
        )}
      </Button>
    </div>
  );
}
