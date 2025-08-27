#!//usr/bin/env raku

use v6;
use lib 'path/to/your/lib';
use strict;

# Função para ler dados de um arquivo
sub read-data (Str $file) {
    return slurp($file).lines;
}

sub analyze-choices (@data) {
    my %results;
    for @data -> $line {
        my ($choice, $value) = $line.split(':');
        %results{$choice} += $value.Int;
    }
    return %results;
}

# função de pente fino dos arquivos
sub refine-data (@data) {
    return @data.map({ $_.trim }).grep({ $_ ne '' });
}

# Analise de medias
sub analyze-averages (@data) {
    my %totals;
    my %counts;
    for @data -> $line {
        my ($choice, $value) = $line.split(':');
        %totals{$choice} += $value.Int;
        %counts{$choice}++;
    }
    return %totals.map({ $_ / %counts{$_} });
}

# Escolha sua medida para purpose
sub MAIN (Str $file, Str $output) {
    my @data = read-data($file);
    @data = refine-data(@data);
    my $results = analyze-choices(@data);
    my $averages = analyze-averages(@data);
    say "Results: ", $results.perl;
    say "Averages: ", $averages.perl;
}