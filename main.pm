#!/usr/bin/env perl

package main;

use strict;
use warnings;

sub analyze_document {
    my ($document) = @_;
    # Perform analysis on the document
    return "Analysis result for " . $document->{title};
}
